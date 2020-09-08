import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import { Observable } from 'rxjs';
import * as AuthActions from '../../../actions/auth.actions'
import { User } from '../../../model/User';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public store: Store<AppState>, public router: Router) {

  }

  User: User = {} as User;
  ngOnInit(): void {

  }

  SignUp() {

    // this.User.id = Math.floor(Math.random() * 100);
    this.store.dispatch(new AuthActions.Signup(this.User))
    this.router.navigate(['/login']);

  }
}
