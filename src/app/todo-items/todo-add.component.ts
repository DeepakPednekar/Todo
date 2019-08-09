import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {TodoServices} from './todo.services';
import {TodoListItem} from './todo-items.interfaces';

@Component({
  selector: 'app-todoitem-add',
  templateUrl: './todo-add.component.html',
})
export class TodoAddComponent {

  todo_form: FormGroup;
  constructor(private s_todoservice: TodoServices){

    this.todo_form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z \t ]{3,}')]),
      description: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(){
    let values = this.todo_form.getRawValue();

    this.s_todoservice.addTodoItem(values).subscribe( ret_data => {

     if ( ret_data.type == "+OK"){
       let id = ret_data['return'];
       values['id'] = id;
       this.s_todoservice.todoList.push( <TodoListItem> values);
     }

    });

  } // end of submit
}
