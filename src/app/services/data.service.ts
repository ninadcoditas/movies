import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../model/Movie';
import { User } from '../model/User'
@Injectable({
  providedIn: 'root'
})

// change from story

export class DataService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000"

  getMovies() {
    // console.log(this.url)
    return this.http.get(`${this.url}/movies`)
  }

  updateMovie(data: Movie) {
    // console.log(data)
    return this.http.put(`${this.url}/movies/${data.id}`, data)
  }

  deleteMovie(id: number) {
    return this.http.delete(`${this.url}/movies/${id}`)
  }

  addMovie(data: Movie) {
    return this.http.post(`${this.url}/movies`, data)
  }

  getUsers() {
    return this.http.get(`${this.url}/users`)
  }

  signUp(data: User) {
    // debugger;
    return this.http.post(`${this.url}/users`, data)
  }

}
