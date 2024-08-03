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
      image: 'assets/project1.jpg',
      link: '#',
      tags: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      title: 'Youtube Video Downloader',
      description: 'An innovative web application that revolutionizes task management.',
      image: 'assets/project1.jpg',
      link: '#',
      tags: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      title: 'Social Media Dashboard',
      description: 'An innovative web application that revolutionizes task management.',
      image: 'assets/project1.jpg',
      link: '#',
      tags: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      title: 'Fitness Tracking App',
      description: 'An innovative web application that revolutionizes task management.',
      image: 'assets/project1.jpg',
      link: '#',
      tags: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      title: 'IoT based Smart Pond Monitoring',
      description: 'An innovative web application that revolutionizes task management.',
      image: 'assets/project1.jpg',
      link: '#',
      tags: ['Angular', 'TypeScript', 'SCSS']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
