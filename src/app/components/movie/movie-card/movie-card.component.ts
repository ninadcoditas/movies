import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../model/Movie';
import { IconDefinition, faStar, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../../services/theme.service';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import * as MovieActions from '../../../actions/movie.actions'

import {
  faEdit as faSolidEdit,
  faTrash as faSolidTrash
} from "@fortawesome/free-solid-svg-icons";

import {
  faEdit as faRegularEdit,
  faTrash as faRegularTrash
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;
  @Input() isLoggedIn
  faStar: IconDefinition = faStar;
  faEdit: IconDefinition = faEdit;
  faTrash: IconDefinition = faTrash;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    public themeService: ThemeService
  ) { }

  ngOnInit(): void {
  }


  ngOnChanges(): void {
    if (this.themeService.isDarkTheme()) {
      this.faEdit = faRegularEdit;
      this.faTrash = faRegularTrash;
    } else {
      this.faEdit = faSolidEdit;
      this.faTrash = faSolidTrash;
    }
  }

  deleteMovie(id: number) {
    this.store.dispatch(new MovieActions.DeleteMovie(id))
  }

  updateMovie(movie: Movie) {
    this.router.navigate(['/updatemovie'], { state: movie })
  }


  getImage(img) {
    if (img.trim().length > 0) {
      return img
    }
    else {
      return "https://sisterhoodofstyle.com/wp-content/uploads/2018/02/no-image-1.jpg"
    }
  }
}
