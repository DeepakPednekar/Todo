import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {TodoServices} from './todo.services';

@Component({
  selector: 'app-todoitem-add',
  templateUrl: './todo-add.component.html',
})
export class TodoAddComponent {

  todo_form: FormGroup;
  constructor(private s_todoservice: TodoServices){

    this.todo_form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{5,10}')]),
      description: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(){
    let values = this.todo_form.getRawValue();
    // now submit these server
    this.s_todoservice.addTodoItem(values);
  }
}
