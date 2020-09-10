import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import { Router } from '@angular/router'
import * as AuthActions from '../../../actions/auth.actions'
import { User } from '../../../model/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn;
  subscription

  loginForm: FormGroup

  constructor(public store: Store<AppState>, public router: Router) { }

  ngOnInit(): void {

    this.subscription = this.store.select("auth").subscribe((data) => {
      this.isLoggedIn = data["isLoggedIn"]
    });

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  Login() {

    // console.log(this.loginForm.value)

    this.store.dispatch(new AuthActions.Login(this.loginForm.value))
    this.subscription = this.store.select("auth").subscribe((data) => {
      this.isLoggedIn = data["isLoggedIn"]
    });
    this.isLoggedIn == true ? this.router.navigate(['/home']) : alert("Password or username is incorrect");

  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
