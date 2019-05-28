import {Component} from '@angular/core';
import {TodoServices} from './todo.services';
import {TodoListItem} from './todo-items.interfaces';

@Component({
  selector: 'app-todoitem-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent{
  todoList: TodoListItem[] = []; // this holds local reference for list items

  constructor(private s_todo: TodoServices){

    this.todoList = this.s_todo.todoList;

    let data: TodoListItem= {title: 'test', description: 'i want to eat tuna fish'};
    this.s_todo.addTodoItem(data);
  }

  onDelete(index: number){

    console.log(`TodoListComponent | requesting to delete item | ${index}`);
    this.s_todo.deleteTodoListItem(index);
  }
}
