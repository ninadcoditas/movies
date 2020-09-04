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
    console.log('Movie name is ', window.history.state.name)
    this.Movie = window.history.state
  }

  onSubmit() {
    this.Movie.rating = parseInt(this.Movie.rating.toString())
    this.store.dispatch(new MovieActions.UpdateMovie(this.Movie));
    this.router.navigate(['home'])
  }




}
