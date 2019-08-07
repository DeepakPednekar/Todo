import {NgModule} from '@angular/core';

import {TodoAddComponent, TodoHomeComponent, TodoListComponent, TodoServices} from './';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';



// routing
const todo_routes: Routes = [
  {path: '', component: TodoHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(todo_routes)]
})
export class TodoRoutingModule {}
/// routing end


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, TodoRoutingModule],
  declarations: [TodoListComponent, TodoAddComponent, TodoHomeComponent],
  providers: [TodoServices],
  exports: [RouterModule, TodoRoutingModule]
})
export class TodoModule {}
