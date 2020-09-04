import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import { Movie } from '../../../model/Movie'
import { Observable } from 'rxjs';

import * as MovieActions from '../../../actions/movie.actions'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  Movie: Movie = {} as Movie;
  joinedCast: string = "";
  ngOnInit(): void {
  }

  onSubmit() {
    // this.Movie.id = Math.floor(Math.random() * 100)
    this.addMovie(this.Movie)
  }

  addMovie(movieObj: Movie) {
    this.Movie.rating = parseFloat(this.Movie.rating.toString())
    this.Movie.cast = this.joinedCast.split(";").filter((x) => x.trim() != "")
    this.store.dispatch(new MovieActions.AddMovie(movieObj));
    this.router.navigate(['home'])
  }

}
