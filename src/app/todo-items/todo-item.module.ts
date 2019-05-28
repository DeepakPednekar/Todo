import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import components
import { TodoAddComponent, TodoListComponent, TodoServices } from './';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [TodoAddComponent, TodoListComponent],
  exports: [TodoAddComponent, TodoListComponent],
  providers: [TodoServices]
})
export class TodoItemModule {}
