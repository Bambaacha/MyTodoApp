import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { WatermarkDirective } from './watermark.directive';
import { AutoInputWidthDirective } from './auto-input-width.directive';
import { ListboxComponent } from './listbox/listbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    WatermarkDirective,
    AutoInputWidthDirective,
    ListboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
