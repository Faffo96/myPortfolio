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
      longDescription: 'As the final project of my full-stack development course at Epicode, I developed Hamburger Shop, an online platform built with Angular, Spring, and PostgreSQL, completed in just 3 weeks.  The application includes both user and admin sections. For customers, it features an intuitive interface for placing custom burger orders with home delivery. It also includes a point-based loyalty system, where users earn discounts for every 20 euros spent, redeemable after collecting 10 points. Other features include table reservations, a cart system for customizing orders with pricing rules for extra ingredients, and an order history for both deliveries and reservations. On the admin side, the platform offers employee shift management via a calendar, menu management for adding, modifying, or deleting items, and advanced business data queries. Admins also have access to user and employee lists for streamlined operations. This project demonstrates my ability to design and implement a full-stack solution, handling complex user interactions and administrative workflows efficiently.',
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
      longDescription: 'Spotify Clone is my second team project, built in 1 week using HTML, CSS, and JavaScript. This project meticulously replicates a mockup and utilizes a public API to fetch music data. The app allows users to play and pause tracks, adjust the volume, and switch between different songs. It includes detailed pages for both artists and albums. Designed as a one-page application, all functionality is contained within index.html, offering a seamless user experience that mirrors the core features of Spotify. This project showcases my ability to closely follow design specifications and implement interactive features with fundamental web technologies.',
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
      longDescription: 'Built in just 1 day, this Netflix Clone was one of my first projects developed with Angular, using a db.json file as the database. The app requires users to log in before accessing any features. Once logged in, users can add TV series to their favorites, view detailed pages for each movie, filter content by genre, and manage account settings. A dedicated page for favorites ensures easy access to preferred content, creating a smooth user experience. This project highlights my ability to quickly implement key features and refine my Angular skills early in my development journey.',
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
      longDescription: 'Medium Clone is one of my early projects, completed in just 1 day using HTML, CSS, and JavaScript. The project aimed to faithfully replicate a mockup of the Medium website. The clone features custom animations for the "M" in the header and a responsive navbar with color transitions, all implemented from scratch. The design is fully responsive, ensuring a seamless experience across different devices. This project demonstrates my ability to recreate complex web designs and implement custom interactive elements.',
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
      longDescription: "Epicode Style Clone is my second Angular project, completed in just 1 day, using a mock API as its database. The app simulates a task management system where Epicode employees can assign tasks to each other and track their completion. Key features include viewing all tasks, filtering them by completion status, and accessing a dedicated page displaying all employees along with their assigned tasks. The app also incorporates a search bar for easy navigation by employee name. This project showcases my ability to quickly build functional applications with task management features and implement filters, all within a simulated professional environment.",
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
      longDescription: 'Epic Forum is a responsive social platform built in Angular, designed to foster interaction among students in the class. Completed in 1 week, this project utilizes a simple db.json file as its backend database. The application allows users to log in to access full functionality, such as writing, editing, and deleting posts. Users can like posts, leave comments, and search for profiles of other registered users. Additionally, sample profile pages are available for exploration by clicking on any name within the app. This project, being one of my earliest larger-scale Angular applications, demonstrates my ability to implement key social features while ensuring responsive design.',
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
      shortDescription: 'A quiz website themed around Epicode, built with HTML, CSS, and JavaScript.',
      longDescription: 'Epicode Style Quiz was one of my first web applications and my first group project, where I acted as team leader. Built entirely with HTML, CSS, and JavaScript, the app simulates the weekly quiz system we used during the Epicode course. Before accessing the quiz, users must confirm a disclaimer. The quiz consists of 10 questions with 4 possible answers each, and users have 30 seconds to respond to each question. After completing the quiz, the app displays the final score and offers a detailed breakdown of correct and incorrect answers. Additionally, users can provide feedback on a dedicated page. This project highlights my early teamwork and leadership experience, as well as my proficiency in web fundamentals.',
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
      longDescription: "Car Showroom was my first Angular project, built in just 1 day. The app uses a mock API, which I populated to manage the data, and functions as an exhibition platform for cars in a showroom. Cars are displayed in categories, and users can search for specific car models using a search bar, providing a smooth browsing experience. This project allowed me to explore Angular's core functionalities while implementing an intuitive search feature and organizing data effectively. It demonstrates my ability to quickly build a structured and functional app, even in my early stages of development.",
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