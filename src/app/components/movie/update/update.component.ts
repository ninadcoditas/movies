import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import { Movie } from '../../../model/Movie'
import { Observable } from 'rxjs';
import * as MovieActions from '../../../actions/movie.actions'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  Movie: Movie = {} as Movie;
  ngOnInit(): void {

    console.log('data rec is ', window.history.state.name)
    this.Movie.name = window.history.state.name;
    this.Movie.genre = window.history.state.genre;
    this.Movie.id = window.history.state.id;
    // this.Movie = window.history.state as Movie
  }

  onSubmit() {
    this.store.dispatch(new MovieActions.UpdateMovie(this.Movie));
    this.router.navigate(['home'])
  }




}
