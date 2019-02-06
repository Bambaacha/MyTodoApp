import { Component } from '@angular/core';
import { ChucknorrisService } from './chucknorris.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MyTodoApp';

  constructor(private chucknorrisService: ChucknorrisService) {}

  jokeLoad() {
    this.chucknorrisService.loadJoke.next();
  }
}
