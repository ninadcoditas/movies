import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import * as MovieActions from '../../../actions/movie.actions'
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  addMovieForm: FormGroup;
  ngOnInit(): void {
    this.addMovieForm = new FormGroup({
      name: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      rating: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
      cast: new FormControl('', Validators.required)
    })
  }

  addMovie() {
    this.addMovieForm.value.rating = parseFloat(this.addMovieForm.value.rating.toString())
    this.addMovieForm.value.cast = this.addMovieForm.value.cast.split(";").filter((x) => x.trim() != "")
    this.store.dispatch(new MovieActions.AddMovie(this.addMovieForm.value));
    this.router.navigate(['home'])
  }

}
