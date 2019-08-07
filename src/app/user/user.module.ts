import {FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  SignupComponent,
  LoginComponent
} from './index';
import {RouterModule, Routes} from '@angular/router';

// for routing
const user_routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(user_routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
/// end routing

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule, UserRoutingModule],
  declarations: [SignupComponent, LoginComponent],
  exports: [UserRoutingModule]
})
export class UserModule {}
