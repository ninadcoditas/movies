import { Component } from '@angular/core';
import { Movie } from './model/Movie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  moviesList: Array<Movie> = [
    {
      "id": 1,
      "name": "The Dark Knight",
      "year": 2008,
      "genre": "Action,Crime,Drama"
    },
    {
      "id": 2,
      "name": "The Shawshank Redemption",
      "year": 1994,
      "genre": "Drama"
    },
    {
      "id": 3,
      "name": "Fight Club",
      "year": 1999,
      "genre": "Drama"
    }
  ]
}
