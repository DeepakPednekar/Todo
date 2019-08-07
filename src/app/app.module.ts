import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// for js
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//custome modules
import {CommonModule} from '@angular/common';
import {UserModule} from './user/user.module';
import {TodoModule} from './todo-items/todo.module';
import {RouterModule, Routes} from '@angular/router';

/////// routing start

const base_routes: Routes = [
  {path: '', loadChildren: './todo-items/todo.module#TodoRoutingModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(base_routes)]
})
export class BaseRouting {}

////// routing ends

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    NgbModule,
    CommonModule,
    UserModule,
    BaseRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
