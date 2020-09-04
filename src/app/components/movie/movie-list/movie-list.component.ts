import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router'
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
  isLoggedIn: Observable<any>;
  subscription
  constructor(private data: DataService, private store: Store<AppState>, private router: Router) {
    this.movielist = store.select('movie');

  }

  ngOnInit(): void {
    this.subscription = this.store.select("auth").subscribe((data) => {
      this.isLoggedIn = data["isLoggedIn"]
    });
    this.store.dispatch(new MovieActions.LoadMovie())
  }

  deleteMovie(id: number) {
    this.store.dispatch(new MovieActions.DeleteMovie(id))
  }

  updateMovie(movie: Movie) {
    this.router.navigate(['/updatemovie'], { state: movie })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }
}
