import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import { Observable } from 'rxjs';
import * as MovieActions from '../../../actions/movie.actions'
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {


  movielist = []
  isLoggedIn: Observable<any>;
  subscription$
  constructor(
    private store: Store<AppState>,
    public themeService: ThemeService
  ) {
    this.subscription$ = this.store.select('movie').subscribe((data) => {
      this.movielist = data
    })
  }

  ngOnInit(): void {
    this.subscription$ = this.store.select("auth").subscribe((data) => {
      this.isLoggedIn = data["isLoggedIn"]
    });
    this.store.dispatch(new MovieActions.LoadMovie())
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe()
  }
}
