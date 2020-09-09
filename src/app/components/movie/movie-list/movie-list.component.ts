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
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  // movielist: Array<Movie>;
  // movielist: Observable<Movie[]>;
  movielist = []
  isLoggedIn: Observable<any>;

  faEdit: IconDefinition = faEdit;
  // faLightbulb: IconDefinition;
  faTrash: IconDefinition = faTrash;
  // faDollarSign = faDollarSign;

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

    // this.movielist = [];

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


  // toggleTheme() {
  //   if (this.themeService.isDarkTheme()) {
  //     this.themeService.setLightTheme();
  //   } else {
  //     this.themeService.setDarkTheme();
  //   }

  //   this.setLightbulb();
  // }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.setLightbulb()
  }

  setLightbulb() {
    if (this.themeService.isDarkTheme()) {
      this.faEdit = faRegularEdit;
      this.faTrash = faRegularTrash;
      // this.faLightbulb = faRegularLightbulb;
    } else {
      this.faEdit = faSolidEdit;
      this.faTrash = faSolidTrash;
      // this.faLightbulb = faSolidLightbulb;
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }
}
