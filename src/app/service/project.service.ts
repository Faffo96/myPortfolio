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
      imageUrl: '../../../assets/hamburgeria.png',
      altText: 'Hamburgeria',
      uri: 'Hamburgeria',
    images: [
      '../../../assets/hamburgeria.png',
      '../../../assets/hamburgeria.png',
      '../../../assets/hamburgeria.png',
      '../../../assets/hamburgeria.png',
    ],
    demoLink: 'http://ourl.io/s2KeI'
    },
    {
      title: 'SPOTIFY CLONE',
      shortDescription: 'A Spotify clone website built with HTML, CSS, and JavaScript.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
      imageUrl: '../../../assets/spotify.png',
      altText: 'Spotify Clone',
      uri: 'SpotifyClone',
    images: [
      '../../../assets/spotify.png',
      '../../../assets/hamburgeria.png',
      '../../../assets/hamburgeria.png',
    ],
    demoLink: 'https://spotify-clone-ad883.web.app/'
    },
    {
      title: 'NETFLIX CLONE',
      shortDescription: 'A Netflix clone website built with Angular. Full responsive.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
      imageUrl: '../../../assets/spotify.png',
      altText: 'Netflix Clone',
      uri: 'NetflixClone',
    images: [
      '../../../assets/spotify.png',
      '../../../assets/hamburgeria.png',
      '../../../assets/hamburgeria.png',
    ],
    demoLink: ''
    },
    {
      title: 'MEDIUM CLONE',
      shortDescription: 'A Medium clone website built with HTML, CSS, and JavaScript. Full responsive.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
      imageUrl: '../../../assets/medium.png',
      altText: 'Medium Clone',
      uri: 'MediumClone',
    images: [
      '../../../assets/medium.png',
      '../../../assets/hamburgeria.png',
      '../../../assets/hamburgeria.png',
    ],
    demoLink: 'https://medium-clone-f5e1b.web.app/'
    },
    {
      title: 'EPICODE STYLE TASKS',
      shortDescription: 'An introductory Angular application where I followed the typical Epicode layout for an app that allows task assignment to employees.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
      imageUrl: '../../../assets/todo.png',
      altText: 'Epicode Style Tasks',
      uri: 'EpicodeStyleTasks',
    images: [
      '../../../assets/todo.png',
      '../../../assets/hamburgeria.png',
      '../../../assets/hamburgeria.png',
    ],
    demoLink: 'https://epicode-todo.web.app'
    },
    {
      title: 'EPICODE STYLE SOCIAL',
      shortDescription: 'An Angular and Spring Java application for a restaurant business with user reservations and employee management.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
      imageUrl: '../../../assets/spotify.png',
      altText: 'Epicode Style Social',
      uri: 'EpicodeStyleSocial',
    images: [
      '../../../assets/spotify.png',
      '../../../assets/hamburgeria.png',
      '../../../assets/hamburgeria.png',
    ],
    demoLink: ''
    },
    {
      title: 'EPICODE STYLE QUIZ',
      shortDescription: 'A quiz website themed around Epicode, built with HTML, CSS, and JavaScript.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
      imageUrl: '../../../assets/quiz.png',
      altText: 'Epicode Style Quiz',
      uri: 'EpicodeStyleQuiz',
    images: [
      '../../../assets/quiz.png',
      '../../../assets/hamburgeria.png',
      '../../../assets/hamburgeria.png',
    ],
    demoLink: 'https://epicode-quiz-clone.web.app/'
    },
    {
      title: 'CAR SHOWROOM',
      shortDescription: 'An Angular application from an exercise themed around a car showroom.',
      longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores laborum? Quas vitae voluptatibus, facilis tempore rerum ducimus beatae laboriosam expedita fuga eligendi amet harum? Iure ad illo neque dolorum!Nihil laudantium soluta saepe repellendus culpa libero labore mollitia, dicta incidunt voluptatibus ex sed earum atque accusantium, error nulla adipisci, placeat explicabo minima. Necessitatibus reiciendis, sit doloremque vitae iusto iste! Est voluptate deleniti iure vel, iste enim dolor odio odit ipsam nemo, aut consectetur. Nulla harum aliquid eos placeat neque quo asperiores consectetur iure, sunt necessitatibus commodi esse cupiditate nesciunt.',
      imageUrl: '../../../assets/autosalone.png',
      altText: 'Car Showroom',
      uri: 'CarShowroom',
    images: [
      '../../../assets/autosalone.png',
      '../../../assets/hamburgeria.png',
      '../../../assets/hamburgeria.png',
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