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

  @ViewChild(NgbCarousel) carousel!: NgbCarousel;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Subscribe to paramMap changes to detect route changes
    this.paramSub = this.route.paramMap.subscribe(paramMap => {
      const uri = paramMap.get('uri');
      if (uri) {
        this.project = this.projectService.getProjectByUri(uri);
        this.selectedIndex = 0; // Reset the carousel to the first image on URI change

        // Scroll to the top of the page if window is defined
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        this.cdRef.detectChanges(); // Ensure Angular detects and applies changes
      }
    });
  }

  ngOnDestroy() {
    // Cleanup the subscription when the component is destroyed
    if (this.paramSub) {
      this.paramSub.unsubscribe();
    }
  }

  selectSlide(index: number): void {
    this.selectedIndex = index;
    if (this.carousel) {
      this.carousel.select(this.selectedIndex.toString());
    }
  }

  isShortName(): boolean {
    return this.shortNames.includes(this.project?.title);
  }
}