import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../model/Movie'
import { DataService } from '../../services/data.service'
@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movielist: Array<Movie>;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getMovie()
  }

  async getMovie() {
    let _this = this;
    this.data.getMovies().subscribe((movies: Array<Movie>) => {
      _this.movielist = movies
    })
  }

  async deleteMovie(id: number) {
    this.data.deleteMovie(id).subscribe(() => {
      console.log('deleted succesfully')
    })
    await this.getMovie()
  }

}
