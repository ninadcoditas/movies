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
  name: string;

  id: number;
  genre: string;
  ngOnInit(): void {
  }

  onSubmit() {
    this.addMovie({
      id: Math.floor(Math.random() * 100),
      name: this.name,
      genre: this.genre
    })
  }

  addMovie(movieObj: Movie) {
    this.store.dispatch(new MovieActions.AddMovie(movieObj));
    this.router.navigate(['home'])
  }

}
