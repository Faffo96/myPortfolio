import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '../../service/project.service';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterModule, NgFor, NgClass, NgbCarousel, NgbCarouselModule, TranslateModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  project: any;
  selectedIndex = 0;
  shortNames: string [] = ['HAMBURGERIA'];
  paramSub!: Subscription;  // Subscription to track paramMap changes
  isTransitioning = false;  // Variabile per bloccare i clic

  @ViewChild(NgbCarousel) carousel!: NgbCarousel;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.paramSub = this.route.paramMap.subscribe(paramMap => {
      const uri = paramMap.get('uri');
      if (uri) {
        this.project = this.projectService.getProjectByUri(uri);
        this.selectedIndex = 0;

        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        this.cdRef.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    if (this.paramSub) {
      this.paramSub.unsubscribe();
    }
  }

  selectSlide(index: number): void {
    if (this.isTransitioning || index === this.selectedIndex) {
      return;  // Evita clic multipli o clic sull'elemento già attivo
    }

    this.isTransitioning = true;  // Blocca clic ulteriori
    this.selectedIndex = index;

    if (this.carousel) {
      this.carousel.select(this.selectedIndex.toString());
    }

    // Rilascia il blocco dopo 1 secondo
    setTimeout(() => {
      this.isTransitioning = false;
    }, 700);
  }

  onSlideChange(event: any) {
    this.selectedIndex = +event.current;
  }

  isShortName(): boolean {
    return this.shortNames.includes(this.project?.title);
  }

  pauseCarousel() {
    if (this.carousel) {
      this.carousel.pause();
    }
  }

  resumeCarousel() {
    if (this.carousel) {
      this.carousel.cycle();
    }
  }
}