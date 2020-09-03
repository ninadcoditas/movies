import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000"

  getMovies() {
    console.log(this.url)
    return this.http.get(`${this.url}/movies`)
  }

  deleteMovie(id) {
    return this.http.delete(`${this.url}/movies/${id}`)
  }
}
