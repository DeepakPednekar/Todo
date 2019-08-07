import {Component} from '@angular/core';


@Component({
  selector: 'app-todo-home',
  template: `
    <app-todoitem-add></app-todoitem-add>
    <app-todoitem-list></app-todoitem-list>
  `
})
export class TodoHomeComponent {

}
