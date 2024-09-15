import { Injectable } from '@angular/core';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [
    {
      title: 'HAMBURGERIA',
      shortDescription: "SHORT_DESCRIPTION1",
      longDescription: "LONG_DESCRIPTION1",
      imageUrl: '../../../assets/img/hamburgeria.png',
      altText: 'Hamburgeria',
      uri: 'Hamburgeria',
      images: [
        '../../../assets/img/hamburgeria.png',
        '../../../assets/img/hamburgeria/hamburgeria1.png',
        '../../../assets/img/hamburgeria/hamburgeria2.png',
        '../../../assets/img/hamburgeria/hamburgeria3.png',
        '../../../assets/img/hamburgeria/hamburgeria4.png',
        '../../../assets/img/hamburgeria/hamburgeria5.png',
        '../../../assets/img/hamburgeria/hamburgeria6.png',
        '../../../assets/img/hamburgeria/hamburgeria7.png',
        '../../../assets/img/hamburgeria/hamburgeria8.png',
        '../../../assets/img/hamburgeria/hamburgeria9.png',
        '../../../assets/img/hamburgeria/hamburgeria10.png',
        '../../../assets/img/hamburgeria/hamburgeria11.png',
        '../../../assets/img/hamburgeria/hamburgeria12.png',
        '../../../assets/img/hamburgeria/hamburgeria13.png',
      ],
      demoLink: 'URL1'
    },
    {
      title: 'SPOTIFY CLONE',
      shortDescription: "SHORT_DESCRIPTION2",
      longDescription: "LONG_DESCRIPTION2",
      imageUrl: '../../../assets/img/spotify.png',
      altText: 'Spotify Clone',
      uri: 'SpotifyClone',
      images: [
        '../../../assets/img/spotify.png',
        '../../../assets/img/spotify/spotify1.png',
        '../../../assets/img/spotify/spotify2.png',
        '../../../assets/img/spotify/spotify3.png',
      ],
      demoLink: 'https://spotify-clone-ad883.web.app/'
    },
    {
      title: 'NETFLIX CLONE',
      shortDescription: "SHORT_DESCRIPTION3",
      longDescription: "LONG_DESCRIPTION3",
      imageUrl: '../../../assets/img/netflix.png',
      altText: 'Netflix Clone',
      uri: 'NetflixClone',
      images: [
        '../../../assets/img/netflix/netflix1.png',
        '../../../assets/img/netflix/netflix2.png',
        '../../../assets/img/netflix/netflix3.png',
        '../../../assets/img/netflix/netflix4.png',
        '../../../assets/img/netflix/netflix5.png',
        '../../../assets/img/netflix/netflix6.png',
      ],
      demoLink: 'URL2'
    },
    {
      title: 'MEDIUM CLONE',
      shortDescription: "SHORT_DESCRIPTION4",
      longDescription: "LONG_DESCRIPTION4",
      imageUrl: '../../../assets/img/medium.png',
      altText: 'Medium Clone',
      uri: 'MediumClone',
      images: [
        '../../../assets/img/medium.png',
        '../../../assets/img/medium/medium1.png',
      ],
      demoLink: 'https://medium-clone-f5e1b.web.app/'
    },
    {
      title: 'EPICODE STYLE TASKS',
      shortDescription: "SHORT_DESCRIPTION5",
      longDescription: "LONG_DESCRIPTION5",
      imageUrl: '../../../assets/img/todo.png',
      altText: 'Epicode Style Tasks',
      uri: 'EpicodeStyleTasks',
      images: [
        '../../../assets/img/todo.png',
        '../../../assets/img/todo/todo1.png',
        '../../../assets/img/todo/todo2.png',
      ],
      demoLink: 'https://epicode-todo.web.app'
    },
    {
      title: 'EPICODE STYLE SOCIAL',
      shortDescription: "SHORT_DESCRIPTION6",
      longDescription: "LONG_DESCRIPTION6",
      imageUrl: '../../../assets/img/social.png',
      altText: 'Epicode Style Social',
      uri: 'EpicodeStyleSocial',
      images: [
        '../../../assets/img/social.png',
        '../../../assets/img/social/social1.png',
        '../../../assets/img/social/social2.png',
        '../../../assets/img/social/social3.png',
      ],
      demoLink: 'https://www.youtube.com/watch?v=SiCpmRlaK4U'
    },
    {
      title: 'EPICODE STYLE QUIZ',
      shortDescription: "SHORT_DESCRIPTION7",
      longDescription: "LONG_DESCRIPTION7",
      imageUrl: '../../../assets/img/quiz.png',
      altText: 'Epicode Style Quiz',
      uri: 'EpicodeStyleQuiz',
      images: [
        '../../../assets/img/quiz/quiz1.png',
        '../../../assets/img/quiz.png',
        '../../../assets/img/quiz/quiz2.png',
        '../../../assets/img/quiz/quiz3.gif',
        '../../../assets/img/quiz/quiz4.png',
      ],
      demoLink: 'https://epicode-quiz-clone.web.app/'
    },
    {
      title: 'CAR SHOWROOM',
      shortDescription: "SHORT_DESCRIPTION8",
      longDescription: "LONG_DESCRIPTION8",
      imageUrl: '../../../assets/img/autosalone.png',
      altText: 'Car Showroom',
      uri: 'CarShowroom',
      images: [
        '../../../assets/img/autosalone.png',
        '../../../assets/img/car-showroom/showroom1.png',
        '../../../assets/img/car-showroom/showroom2.png',
        '../../../assets/img/car-showroom/showroom3.png',
      ],
      demoLink: 'https://car-showroom-a3b01.web.app/'
    }
  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectByUri(uri: string): Project | undefined {
    return this.projects.find(project => project.uri === uri);
  }
}