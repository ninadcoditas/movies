import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import * as MovieActions from '../../../actions/movie.actions'
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) { }

  updateMovieForm: FormGroup;

  ngOnInit(): void {
    console.log('Movie name is ', window.history.state.name)
    let movieData = window.history.state;
    movieData.cast = movieData.cast.join(";");
    this.updateMovieForm = new FormGroup({
      name: new FormControl(movieData.name, Validators.required),
      genre: new FormControl(movieData.genre, Validators.required),
      rating: new FormControl(movieData.rating, [Validators.required, Validators.min(0), Validators.max(10)]),
      cast: new FormControl(movieData.cast, Validators.required),
      id: new FormControl(movieData.id),
      image: new FormControl(movieData.image, Validators.required)
    })
  }

  onSubmit() {
    this.updateMovieForm.value.rating = parseFloat(this.updateMovieForm.value.rating.toString())
    this.updateMovieForm.value.cast = this.updateMovieForm.value.cast.split(";").filter((x) => x.trim() != "")
    this.store.dispatch(new MovieActions.UpdateMovie(this.updateMovieForm.value));
    this.router.navigate(['home'])
  }

}
