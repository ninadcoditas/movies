import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'

import { Observable } from 'rxjs';
import * as AuthActions from '../../../actions/auth.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn
  constructor(public store: Store<AppState>) {
    this.isLoggedIn = store.select("auth");
  }
  username: string;
  password: string;

  ngOnInit(): void {

  }

  Login() {
    this.store.dispatch(new AuthActions.Login({
      username: this.username,
      password: this.password
    }))

    //  this.store.select("auth");

    console.log(this.isLoggedIn)

  }
}
