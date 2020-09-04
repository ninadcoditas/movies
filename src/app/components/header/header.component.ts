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

  isLoggedIn: Observable<boolean>;
  subscription;
  constructor(public store: Store<AppState>) {
    this.subscription = store.select("auth").subscribe((data) => {
      this.isLoggedIn = data["isLoggedIn"]
    });

  }

  ngOnInit(): void {
    this.store.dispatch(new AuthActions.Load_Users())
  }
  Logout() {
    this.store.dispatch(new AuthActions.Logout())
    this.subscription = this.store.select("auth").subscribe((data) => {
      this.isLoggedIn = data["isLoggedIn"]
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }


}
