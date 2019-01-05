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
    description: 'Description sdjkfksjdfh kjsdkfj nksjdf kjsd fkjsdnfkjsndf knjsfjksf jknskdf nskjdfn ksjd nfksnjdfkjsndf kjsndfknjsdfkj nskdfj ns asjkd ajksdbkajsbd kjasb dkbjasdkjbasdkbjasdkjb kjb kdf nskjdf ksjd nfksjd nf knjsdf jknsdfknjsdf kjnsdf kjnsf knjsfkd jnskdf jnsdkf jnkj',
    image: '../assets/img/news.PNG',
    git_link: 'placeholder',
    direct_link: 'placeholder'
  }
  constructor() { }

  ngOnInit() {
    
    
  }

}
