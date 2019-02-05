import { Component } from '@angular/core';
import { empty } from 'rxjs';

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
  }
}
