import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  roles: string[] = ['Student', 'Instructor'];
  signUpForm: FormGroup<any>;
  hidePassword = true;
  hideVerifyPassword = true;
  constructor() {
    this.signUpForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*'),
      ]),
      pass: new FormGroup({
        password: new FormControl('', [
          Validators.minLength(8),
          Validators.required,
        ]),
        verifyPassword: new FormControl('', [
          Validators.minLength(8),
          Validators.required,
        ]),
      }),
      birthDate: new FormControl('', Validators.required),
      role: new FormControl(),
    });
  }

  ngOnInit(): void {}
}
