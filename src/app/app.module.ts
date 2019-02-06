import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { WatermarkDirective } from './watermark.directive';
import { AutoInputWidthDirective } from './auto-input-width.directive';
import { ListboxComponent } from './listbox/listbox.component';
import { MyuppercasePipe } from './myuppercase.pipe';

import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    WatermarkDirective,
    AutoInputWidthDirective,
    ListboxComponent,
    MyuppercasePipe,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    SuiModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TodolistComponent },
      { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [ TodolistComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
