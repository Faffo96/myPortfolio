import { NgClass, NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '../../service/project.service';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterModule, NgFor, NgClass, NgbCarousel, NgbCarouselModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  project: any;
  selectedIndex = 0;
  shortNames: string [] = [
    'HAMBURGERIA'
  ]

  @ViewChild(NgbCarousel) carousel!: NgbCarousel;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { 
    const uri = this.route.snapshot.paramMap.get('uri');
    if (uri != null) {
      this.project = this.projectService.getProjectByUri(uri);
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