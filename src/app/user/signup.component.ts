import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from './user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  const_alert_class: Object; // buffer
  alert_class: Object = {};
  alert_msg: string = '';

  form_signup: FormGroup;
  constructor(private s_user: UserService) {

    this.const_alert_class = {};
    this.const_alert_class['success'] = {'alert alert-success': true};
    this.const_alert_class['error'] = {'alert alert-danger': true};

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
        this.alert_class = this.const_alert_class['success'];
        this.alert_msg = `User ${this.fc_email.value} added successfully`;
        this.form_signup.reset();
        return;
      }

      this.alert_class = this.const_alert_class['error'];
      this.alert_msg = `Unable to add User ${this.fc_email.value}`;

    });

    setTimeout(()=>this.cleanMsg(), 5000);

  }

  cleanMsg(){
    this.alert_msg = '';
    delete this.alert_class;
  }

  /// getters

  get fc_email() {return <FormControl> this.form_signup.get('email')}
  get fc_name() {return <FormControl> this.form_signup.controls['name']}
  get fc_username() {return <FormControl> this.form_signup.get('username')}
  get fc_password() {return <FormControl> this.form_signup.get('password')}
  get fc_c_password() {return <FormControl> this.form_signup.get('c_password')}
  //
}
