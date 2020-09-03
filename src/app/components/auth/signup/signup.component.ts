import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import { Observable } from 'rxjs';
import * as AuthActions from '../../../actions/auth.actions'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public store: Store<AppState>, public router: Router) {

  }
  username: string;
  password: string;

  ngOnInit(): void {

  }

  SignUp() {
    this.store.dispatch(new AuthActions.Signup({
      username: this.username,
      password: this.password
    }))

    // this.router.navigate(['/login']);

  }
}
