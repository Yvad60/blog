import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.minLength(1), Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get emailControl() {
    return this.loginForm.get('email');
  }

  onSubmit() {}
}
