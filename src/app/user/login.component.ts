import {Component} from '@angular/core';
import {UserService} from './user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  form_login: FormGroup;
  constructor(private s_user: UserService, private s_router: Router) {
    this.form_login = new FormGroup({
      username : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)])
      });

  } // end of constructor

  onSubmit(){
    const value = this.form_login.getRawValue();

    this.s_user.authentication(value).subscribe( ret_data => {

      if(ret_data.type == '+OK'){
        let token = ret_data['token'];
        this.s_router.navigate(['/']);
        localStorage.setItem('token', token);
      }

    });

  }

  // control getters
  get fc_username(){
    return <FormControl>this.form_login.controls.username;
  }

  get fc_password(){
    return <FormControl>this.form_login.controls.password;
  }

}
