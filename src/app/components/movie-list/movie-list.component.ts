import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../model/Movie'
@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movielist: Array<Movie>;
  constructor() { }

  ngOnInit(): void {
  }

}
