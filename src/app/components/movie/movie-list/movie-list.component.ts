import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state'
import { Movie } from '../../../model/Movie'
import { Observable } from 'rxjs';


import * as MovieActions from '../../../actions/movie.actions'


import {
  faLightbulb as faSolidLightbulb,
  faDollarSign,
  IconDefinition,
  faEdit as faSolidEdit,
  faTrash as faSolidTrash
} from "@fortawesome/free-solid-svg-icons";

import {
  faLightbulb as faRegularLightbulb,
  faEdit as faRegularEdit,
  faTrash as faRegularTrash
} from '@fortawesome/free-solid-svg-icons';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {


  movielist = []
  isLoggedIn: Observable<any>;
  faEdit: IconDefinition = faEdit;
  faTrash: IconDefinition = faTrash;

  subscription
  constructor(
    private data: DataService,
    private store: Store<AppState>,
    private router: Router,
    public themeService: ThemeService
  ) {
    this.subscription = this.store.select('movie').subscribe((data) => {
      this.movielist = data
    })
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

  ngOnChanges(): void {
    if (this.themeService.isDarkTheme()) {
      this.faEdit = faRegularEdit;
      this.faTrash = faRegularTrash;
    } else {
      this.faEdit = faSolidEdit;
      this.faTrash = faSolidTrash;
    }
  }

  getImage(img) {
    if (img.trim().length > 0) {
      return img
    }
    else {
      return ""
    }
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
