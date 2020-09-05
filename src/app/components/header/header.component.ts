import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state'
import { Observable } from 'rxjs';

import * as AuthActions from '../../actions/auth.actions'
import {
  faLightbulb as faSolidLightbulb,
  faDollarSign,
  IconDefinition,
  faEdit as faSolidEdit,
  faTrash as faSolidTrash
} from "@fortawesome/free-solid-svg-icons";

import {
  faLightbulb as faRegularLightbulb,
  faEdit as faRegularEdit,
  faTrash as faRegularTrash
} from '@fortawesome/free-solid-svg-icons';

import { ThemeService } from '../../services/theme.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: Observable<boolean>;
  subscription;

  faEdit: IconDefinition;
  faLightbulb: IconDefinition;
  faTrash: IconDefinition;
  faDollarSign = faDollarSign;
  isDark: boolean

  constructor(public store: Store<AppState>, public themeService: ThemeService) {
    this.subscription = store.select("auth").subscribe((data) => {
      this.isLoggedIn = data["isLoggedIn"]
    });

  }


  ngOnInit(): void {
    this.store.dispatch(new AuthActions.Load_Users())
    this.setLightbulb();
  }

  // ngOnChanges() {
  //   this.isDark = this.themeService.isDarkTheme()

  // }

  Logout() {
    this.store.dispatch(new AuthActions.Logout())
    this.subscription = this.store.select("auth").subscribe((data) => {
      this.isLoggedIn = data["isLoggedIn"]
    });
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
      this.faEdit = faRegularEdit;
      this.faTrash = faRegularTrash;

      this.faLightbulb = faRegularLightbulb;
    } else {
      this.faEdit = faSolidEdit;
      this.faTrash = faSolidTrash;
      this.faLightbulb = faSolidLightbulb;
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
