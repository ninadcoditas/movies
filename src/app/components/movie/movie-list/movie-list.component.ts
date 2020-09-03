import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import { Movie } from '../../../model/Movie'
import { Observable } from 'rxjs';

import * as MovieActions from '../../../actions/movie.actions'


@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  // movielist: Array<Movie>;
  movielist: Observable<Movie[]>;

  constructor(private data: DataService, private store: Store<AppState>) {
    this.movielist = store.select('movie');
  }

  ngOnInit(): void {

  }

  deleteMovie(id: number) {
    this.store.dispatch(new MovieActions.DeleteMovie(id))
  }

}
