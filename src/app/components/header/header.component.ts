import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state'
import { Observable } from 'rxjs';

import * as AuthActions from '../../actions/auth.actions'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn
  constructor(public store: Store<AppState>) {
    store.select("auth").subscribe((data) => {
      this.isLoggedIn = data["isLoggedIn"]
    });

  }

  ngOnInit(): void {

  }
  Logout() {
    this.store.dispatch(new AuthActions.Logout())
    this.store.select("auth").subscribe((data) => {
      this.isLoggedIn = data["isLoggedIn"]
    });
  }


}
