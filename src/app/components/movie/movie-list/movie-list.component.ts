import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import { Movie } from '../../../model/Movie'
import { Observable } from 'rxjs';


import * as MovieActions from '../../../actions/movie.actions'


import {
  IconDefinition,
  faEdit as faSolidEdit,
  faTrash as faSolidTrash
} from "@fortawesome/free-solid-svg-icons";

import {
  faEdit as faRegularEdit,
  faTrash as faRegularTrash
} from '@fortawesome/free-solid-svg-icons';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {


  movielist = []
  isLoggedIn: Observable<any>;
  subscription
  constructor(
    private store: Store<AppState>,
    public themeService: ThemeService
  ) {
    this.subscription = this.store.select('movie').subscribe((data) => {
      this.movielist = data
    })
  }

  ngOnInit(): void {
    this.subscription = this.store.select("auth").subscribe((data) => {
      this.isLoggedIn = data["isLoggedIn"]
    });
    this.store.dispatch(new MovieActions.LoadMovie())
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
