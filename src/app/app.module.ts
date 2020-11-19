import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { AssignmentUdemyComponent } from './assignment-udemy/assignment-udemy.component';
import { PipePlayComponent } from './pipe-play/pipe-play.component';
import { Udemy3Component } from './udemy3/udemy3.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AssignmentUdemyComponent,
    PipePlayComponent,
    Udemy3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
