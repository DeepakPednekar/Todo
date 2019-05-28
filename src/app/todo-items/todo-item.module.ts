import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

// import components
import { TodoAddComponent } from './';
@NgModule({
  imports: [CommonModule, FormsModule],

  declarations: [TodoAddComponent],
  exports: [TodoAddComponent]
})
export class TodoItemModule {}
