import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import components
import { TodoAddComponent } from './';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [TodoAddComponent],
  exports: [TodoAddComponent]
})
export class TodoItemModule {}
