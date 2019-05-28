import { Injectable } from '@angular/core';
import {TodoListItem} from './todo-items.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoServices {
  todoList: TodoListItem[] = [];

}
