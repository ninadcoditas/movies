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

  name: string;
  genre: string;
  id: number;
  ngOnInit(): void {

    console.log('data rec is ', window.history.state.name)
    this.name = window.history.state.name;
    this.genre = window.history.state.genre;
    this.id = window.history.state.id;
  }

  onSubmit() {
    this.store.dispatch(new MovieActions.UpdateMovie({ id: this.id, name: this.name, genre: this.genre }));
    this.router.navigate(['home'])
  }




}
