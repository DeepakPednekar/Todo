import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


//custome modules
import {TodoItemModule} from './todo-items/todo-item.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
