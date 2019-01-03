import { Component, OnInit } from '@angular/core';
import { Project } from '../projectClass';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  news: Project = {
    name: 'News Website',
    description: 'Description',
    image: '../assets/img/news.PNG',
    git_link: 'placeholder',
    direct_link: 'placeholder'
  }
  constructor() { }

  ngOnInit() {
    
    
  }

}
