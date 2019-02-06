import { Component, OnInit } from '@angular/core';
import { ChucknorrisService } from '../chucknorris.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  jokeText = '';

  constructor(chucknorrisService: ChucknorrisService) { 
    this.jokeText = chucknorrisService.lastJokeText
  }

  ngOnInit() {
  }

}
