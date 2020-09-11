import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import * as AuthActions from '../../../actions/auth.actions'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import ConfirmPasswordValidator from '../../../custom-validators/password.validator'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public store: Store<AppState>, public router: Router) { }

  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    },
      {
        validators: ConfirmPasswordValidator('password', 'confirmPassword')
      }
    )
  }

  SignUp() {
    // console.log(this.signupForm.value)
    this.store.dispatch(new AuthActions.Signup(this.signupForm.value))
    this.router.navigate(['/login']);
  }
}
