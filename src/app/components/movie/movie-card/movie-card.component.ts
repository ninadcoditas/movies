import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../model/Movie';
import { IconDefinition, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;
  faStar: IconDefinition = faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
