import { Injectable } from '@angular/core';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [
    {
      title: 'HAMBURGERIA',
      shortDescription: 'An Angular and Spring Java application for a restaurant business with user reservations and employee management.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
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
    demoLink: 'http://ourl.io/s2KeI'
    },
    {
      title: 'SPOTIFY CLONE',
      shortDescription: 'A Spotify clone website built with HTML, CSS, and JavaScript.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
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
      shortDescription: 'A Netflix clone website built with Angular. Full responsive.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
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
    demoLink: 'https://www.youtube.com/watch?v=EBfnk1Lao1Y'
    },
    {
      title: 'MEDIUM CLONE',
      shortDescription: 'A Medium clone website built with HTML, CSS, and JavaScript. Full responsive.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
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
      shortDescription: 'An introductory Angular application where I followed the typical Epicode layout for an app that allows task assignment to employees.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
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
      shortDescription: 'An Angular and Spring Java application for a restaurant business with user reservations and employee management.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
      imageUrl: '../../../assets/img/social.png',
      altText: 'Epicode Style Social',
      uri: 'EpicodeStyleSocial',
    images: [
      '../../../assets/img/social.png',
      '../../../assets/img/social/social1.png',
      '../../../assets/img/social/social2.png',
      '../../../assets/img/social/social3.png',
    ],
    demoLink: ''
    },
    {
      title: 'EPICODE STYLE QUIZ',
      shortDescription: 'A quiz website themed around Epicode, built with HTML, CSS, and JavaScript.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
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
      shortDescription: 'An Angular application from an exercise themed around a car showroom.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
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