import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListboxComponent {
  @Input()
  items = [];

  @Output()
  editItemClick = new EventEmitter<number>();

  @Output()
  removeItemClick = new EventEmitter<number>();

  editItem(index: number) {
    this.editItemClick.emit(index);
  }
  removeItem(index: number) {
    this.removeItemClick.emit(index);
  }
}
