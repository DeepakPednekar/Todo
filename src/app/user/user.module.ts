import {FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  UserComponent,
  SignupComponent,
  LoginComponent
} from './index';


@NgModule({
  declarations: [UserComponent, SignupComponent, LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule,],
  entryComponents: [UserComponent]
})
export class UserModule {}
