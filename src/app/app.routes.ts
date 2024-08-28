import { Routes } from '@angular/router';
import { MyProjectsComponent } from './component/my-projects/my-projects.component';
import { HomeComponent } from './component/home/home.component';
import { ProjectDetailsComponent } from './component/project-details/project-details.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'my-projects', component: MyProjectsComponent },
    { path: 'my-projects/:uri', component: ProjectDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/404' }
];