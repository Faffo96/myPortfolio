import { Routes } from '@angular/router';
import { MyProjectsComponent } from './component/my-projects/my-projects.component';
import { CarShowroomDetailsComponent } from './component/car-showroom-details/car-showroom-details.component';
import { HamburgeriaDetailsComponent } from './component/hamburgeria-details/hamburgeria-details.component';
import { MediumDetailsComponent } from './component/medium-details/medium-details.component';
import { NetflixDetailsComponent } from './component/netflix-details/netflix-details.component';
import { QuizDetailsComponent } from './component/quiz-details/quiz-details.component';
import { SocialDetailsComponent } from './component/social-details/social-details.component';
import { SpotifyDetailsComponent } from './component/spotify-details/spotify-details.component';
import { TodoDetailsComponent } from './component/todo-details/todo-details.component';


export const routes: Routes = [
    { path: 'my-projects', component: MyProjectsComponent },
    { path: 'my-projects/car-showroom', component: CarShowroomDetailsComponent },
    { path: 'my-projects/hamburgeria', component: HamburgeriaDetailsComponent },
    { path: 'my-projects/medium', component: MediumDetailsComponent },
    { path: 'my-projects/netflix', component: NetflixDetailsComponent },
    { path: 'my-projects/quiz', component: QuizDetailsComponent },
    { path: 'my-projects/social', component: SocialDetailsComponent },
    { path: 'my-projects/spotify', component: SpotifyDetailsComponent },
    { path: 'my-projects/todo', component: TodoDetailsComponent },
    { path: 'car-showroom-details', component: CarShowroomDetailsComponent },
    { path: 'hamburgeria-details', component: HamburgeriaDetailsComponent },
    { path: 'medium-details', component: MediumDetailsComponent },
    { path: 'netflix-details', component: NetflixDetailsComponent },
    { path: 'quiz-details', component: QuizDetailsComponent },
    { path: 'social-details', component: SocialDetailsComponent },
    { path: 'spotify-details', component: SpotifyDetailsComponent },
    { path: 'todo-details', component: TodoDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/404' }
];