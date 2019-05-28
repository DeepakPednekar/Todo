import { Injectable } from '@angular/core';
import {TodoListItem} from './todo-items.interfaces';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServices {
  todoList: TodoListItem[] = [];

  addTodoItem(data: TodoListItem){

    //sent to server and then get response
    this.todoList.push(data);

    // return of();
  }

  deleteTodoListItem(index:number){
    this.todoList.splice(index, 1);
  }
}
