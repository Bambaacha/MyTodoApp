import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListboxComponent {
  @Input()
  items = [];

  editItem(index: number) {}
  removeItem(index: number) {}
}
