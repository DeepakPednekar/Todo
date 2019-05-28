import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-todoitem-add',
  templateUrl: './todo-add.component.html',
})
export class TodoAddComponent {

  todo_form: FormGroup;
  constructor(){

    this.todo_form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{5,10}')]),
      descr: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(){
    let values = this.todo_form.getRawValue();
    // now submit these server
  }
}
