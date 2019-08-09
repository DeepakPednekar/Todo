import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from './user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  form_signup: FormGroup;
  constructor(private s_user: UserService) {

    this.form_signup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      c_password: new FormControl('', [Validators.required]),
    });
  } //end of constructor

  onSubmit() {

    let value = this.form_signup.getRawValue();
    delete value['c_password'];
    this.s_user.register(value).subscribe( ret_data => {
      if(ret_data.type == "+OK"){
        this.form_signup.reset();
      }

    });

  }


  /// getters

  get fc_email() {return <FormControl> this.form_signup.get('email')}
  get fc_name() {return <FormControl> this.form_signup.controls['name']}
  get fc_username() {return <FormControl> this.form_signup.get('username')}
  get fc_password() {return <FormControl> this.form_signup.get('password')}
  get fc_c_password() {return <FormControl> this.form_signup.get('c_password')}
  //
}
