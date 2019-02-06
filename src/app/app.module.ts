import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { WatermarkDirective } from './watermark.directive';
import { AutoInputWidthDirective } from './auto-input-width.directive';
import { ListboxComponent } from './listbox/listbox.component';
import { MyuppercasePipe } from './myuppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    WatermarkDirective,
    AutoInputWidthDirective,
    ListboxComponent,
    MyuppercasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
