import { Component, OnInit } from '@angular/core';
import { Project } from '../projectClass';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projString: string = '</Projects>'
  news: Project = {
    name: 'News Website',
    description: 'This news website makes HTTP requests to a news distribution API and pulls up to date articles which are displayed to the user. The website has a built in search feature and users can also filter stories using several categories.',
    image: '../assets/img/news.PNG',
    git_link: 'https://github.com/RoryMagee/News',
    direct_link: 'http://news-server.eu-west-1.elasticbeanstalk.com/'
  } 
  eshop: Project = {
    name: 'Ecommerce Website',
    description: 'This website is an implementation of an ecommerce website which offers functionality such as account creation, fully functioning search, users are able to add products to their basket and checkout. Users are also able to register as a seller and upload their own products for sale.',
    image: '../assets/img/shop.PNG',
    git_link: 'https://github.com/RoryMagee/E-Shop',
    direct_link: 'http://shop.snspbvwdfe.eu-west-1.elasticbeanstalk.com/#/'
  }
  weather: Project = {
    name: 'Weather Website',
    description: 'Local weather information is pulled from a weather forecast API and is displayed for the user in an easily consumable format.',
    image: '../assets/img/weather.PNG',
    git_link: 'https://github.com/RoryMagee/weather',
    direct_link: 'http://weathersite-env.xrxtpebiqm.eu-west-1.elasticbeanstalk.com/#/'
  }
  constructor() { }

  ngOnInit() {
    
    
  }

}
