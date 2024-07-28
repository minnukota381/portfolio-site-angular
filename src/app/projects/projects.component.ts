import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
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
      description: 'Brief description of Project 1.',
      image: 'assets/project1.jpg',
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Brief description of Project 2.',
      image: 'assets/project2.jpg',
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'Brief description of Project 3.',
      image: 'assets/project3.jpg',
      link: '#'
    },
    {
      title: 'Project 4',
      description: 'Brief description of Project 4.',
      image: 'assets/project4.jpg',
      link: '#'
    },
    {
      title: 'Project 5',
      description: 'Brief description of Project 5.',
      image: 'assets/project5.jpg',
      link: '#'
    },
    {
      title: 'Project 6',
      description: 'Brief description of Project 6.',
      image: 'assets/project6.jpg',
      link: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
