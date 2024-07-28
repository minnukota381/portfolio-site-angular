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
      title: 'Project 1',
      description: 'An innovative web application that revolutionizes task management.',
      image: 'assets/project1.jpg',
      link: '#',
      tags: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      title: 'Project 1',
      description: 'An innovative web application that revolutionizes task management.',
      image: 'assets/project1.jpg',
      link: '#',
      tags: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      title: 'Project 1',
      description: 'An innovative web application that revolutionizes task management.',
      image: 'assets/project1.jpg',
      link: '#',
      tags: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      title: 'Project 1',
      description: 'An innovative web application that revolutionizes task management.',
      image: 'assets/project1.jpg',
      link: '#',
      tags: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      title: 'Project 1',
      description: 'An innovative web application that revolutionizes task management.',
      image: 'assets/project1.jpg',
      link: '#',
      tags: ['Angular', 'TypeScript', 'SCSS']
    },
    // Add more projects with similar structure
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
