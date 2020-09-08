import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import { Router } from '@angular/router'

import { Observable } from 'rxjs';
import * as AuthActions from '../../../actions/auth.actions'
import { User } from '../../../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn;
  subscription
  constructor(public store: Store<AppState>, public router: Router) {
    this.isLoggedIn = store.select("auth");
  }

  User: User = {} as User;

  ngOnInit(): void {

  }

  Login() {
    this.store.dispatch(new AuthActions.Login(this.User))

    this.subscription = this.store.select("auth").subscribe((data) => {
      this.isLoggedIn = data["isLoggedIn"]
    });

    this.isLoggedIn == true ? this.router.navigate(['/home']) : alert("invalid creds");
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe()
  // }
}
