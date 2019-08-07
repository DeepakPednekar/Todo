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
  // {path: '', loadChildren: './todo-items/todo.module#TodoRoutingModule'},
  {path: '', loadChildren: './todo-items/todo.module#TodoModule'},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(base_routes)],
  exports: [RouterModule]
})
export class BaseRouting {}

////// routing ends

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    BaseRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
