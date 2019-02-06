import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { ChucknorrisService } from '../chucknorris.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  todoText = 'foobar';
  todos = [];
  isEditMode = false;
  updateTodoIndex = -1;
  jokeText = ``;

  constructor(private chucknorrisService: ChucknorrisService, private router: Router) {
    
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

    this.chucknorrisService.getJoke().subscribe(joke => {
      this.jokeText =joke.value;
      this.chucknorrisService.lastJokeText = joke.value;
    });
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }
}
