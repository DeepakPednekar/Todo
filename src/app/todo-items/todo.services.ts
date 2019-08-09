import { Injectable } from '@angular/core';
import {TodoListItem} from './todo-items.interfaces';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, retry, tap} from 'rxjs/operators';
import {HTTP_RESPONSE} from '../app.const';
import { environment } from '../../environments/environment';


const URLS = {
  add: environment.getUrl('/todo'),
};


@Injectable({
  providedIn: 'root'
})
export class TodoServices {
  todoList: TodoListItem[] = [];

  constructor(private http: HttpClient){}

  addTodoItem(data: TodoListItem){

    console.debug('s_todo | adding todo items');
    return this.http.post(URLS.add, data).pipe(
      retry(3),
      // catchError(handleError),
      tap(ret_data => console.log('s_user | registering user | ', ret_data)),
      map( ret_data => <HTTP_RESPONSE> ret_data)
    );
  }

  deleteTodoListItem(index:number){
    // this.todoList.splice(index, 1);
  }
}
