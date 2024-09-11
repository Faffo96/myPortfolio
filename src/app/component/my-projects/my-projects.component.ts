import { Component } from '@angular/core';
import { ProjectService } from '../../service/project.service';
import { NgFor } from '@angular/common';
import { Project } from '../../model/project';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
   }
}
