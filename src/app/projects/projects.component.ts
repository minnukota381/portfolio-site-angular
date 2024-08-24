import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'CUTM Result Portal',
      description: 'The CUTM Result Portal is a web application designed to help students and administrators view and manage academic results efficiently. This repository contains the codebase for the portal, including frontend templates, backend logic, and database configurations.',
      image: '../../assets/images/CUTMRP.png',
      link: 'https://cutm-result-portal.onrender.com/',
      tags: ['Flask', 'HTML/CSS', 'MongoDB']
    },
    {
      title: 'Youtube Video Downloader',
      description: 'A simple web application built with Node.js and Express to search for YouTube videos and download them in different qualities.',
      image: '../../assets/images/ytdl.png',
      link: 'https://ytvdl.onrender.com/',
      tags: ['MongoDB', 'ReactJS','NodeJS']
    },
    {
      title: 'Social Media Dashboard',
      description: 'An innovative web application that revolutionizes task management.',
      image: '../../assets/images/smd.png',
      link: '#',
      tags: ['React', 'JavaScript', 'CSS']
    },
    {
      title: 'Fitness Tracking App',
      description: 'The Fitness Tracker Application is a React-based web application designed to help users monitor their fitness activities. It features an overview of their progress, activity cards, friends list, and more, making it easy to keep track of fitness goals and stay motivated.',
      image: '../../assets/images/fitness.png',
      link: 'https://fitness-tracking-app.vercel.app/',
      tags: ['React', 'JavaScript', 'CSS']
    },
    {
      title: 'IoT based Smart Pond Monitoring',
      description: 'SmartPond is a cutting-edge project aimed at monitoring various parameters of ponds to ensure optimal conditions for aquatic life. Our mission is to utilize technology to safeguard the health and well-being of aquatic ecosystems.',
      image: '../../assets/images/SPMS.png',
      link: '#',
      tags: ['Angular', 'TypeScript', 'SpringBoot']
    },
    {
      title: 'Todo List Website',
      description: 'Nep-Tasks is a user-friendly web-based Todo List application designed to help you manage your tasks efficiently. The application is built with HTML, CSS, JavaScript, and utilizes Bootstrap for styling and FontAwesome for icons.',
      image: '../../assets/images/todo.png',
      link: '#',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
