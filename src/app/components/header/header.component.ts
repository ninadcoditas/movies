import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state'
import { Observable } from 'rxjs';

import * as AuthActions from '../../actions/auth.actions'
import {
  faLightbulb as faSolidLightbulb,
  faDollarSign,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";

import { faLightbulb as faRegularLightbulb } from '@fortawesome/free-solid-svg-icons';

import { ThemeService } from '../../services/theme.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: Observable<boolean>;
  subscription;

  faLightbulb: IconDefinition;
  faDollarSign = faDollarSign;
  constructor(public store: Store<AppState>, public themeService: ThemeService) {
    this.subscription = store.select("auth").subscribe((data) => {
      this.isLoggedIn = data["isLoggedIn"]
    });

  }

  ngOnInit(): void {
    this.store.dispatch(new AuthActions.Load_Users())
    this.setLightbulb();
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

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }

    this.setLightbulb();
  }

  setLightbulb() {
    if (this.themeService.isDarkTheme()) {
      this.faLightbulb = faRegularLightbulb;
    } else {
      this.faLightbulb = faSolidLightbulb;
    }
  }


}
