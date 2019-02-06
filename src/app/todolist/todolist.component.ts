import { Component, Injectable } from '@angular/core';
import { ChucknorrisService } from '../chucknorris.service';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

@Injectable()
export class TodolistComponent {
  todoText = 'foobar';
  todos = [];
  isEditMode = false;
  updateTodoIndex = -1;
  jokeText = '';
  jokeService$;
  active = true;

  constructor(private chucknorrisService: ChucknorrisService, private router: Router) {
    this.jokeService$ = this.chucknorrisService.getJoke();
    chucknorrisService.loadJoke.pipe( takeWhile(() => this.active)).subscribe(() => this.loadJoke());
  }

  ngOnDestroy() {
    this.active = false;
  }
  addTodo() {
    if (this.todoText) {
      this.todos.push(this.todoText);
      this.todoText = '';
    }
  }

  updateTodo() {
    this.todos[this.updateTodoIndex] = this.todoText;
    this.todoText = '';
    this.isEditMode = false;
    this.updateTodoIndex = -1;
  }

  editTodo(todoIndex: number) {
    this.isEditMode = true;
    this.updateTodoIndex = todoIndex;
    this.todoText = this.todos[todoIndex];
  }

  removeTodo(todoIndex: number) {
    this.todos.splice(todoIndex, 1);
    this.loadJoke();
  }

  loadJoke() {
    this.chucknorrisService.getJoke().subscribe(joke => {
      this.jokeText = joke.value;
    });
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }
}
