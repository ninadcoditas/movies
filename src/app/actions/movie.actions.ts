import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Movie } from '../model/Movie'

export const ADD_MOVIE = '[MOVIE] Add';

export const DELETE_MOVIE = '[MOVIE] Delete';
export const DELETE_MOVIE_SUCCESS = '[MOVIE] Delete_Success';

export const UPDATE_MOVIE = '[MOVIE] Update';

export const LOAD_MOVIE = '[MOVIE] Load'
export const LOAD_MOVIE_SUCCESS = '[MOVIE] Load_Success'

export class LoadMovie implements Action {
    readonly type = LOAD_MOVIE
    constructor() { }
}

export class LoadMovieSucess implements Action {
    readonly type = LOAD_MOVIE_SUCCESS
    constructor(public payload) { }
}

export class AddMovie implements Action {
    readonly type = ADD_MOVIE
    constructor(public payload: Movie) { }
}

export class DeleteMovie implements Action {
    readonly type = DELETE_MOVIE
    constructor(public payload: number) { }
}

export class DeleteMovieSuccess implements Action {
    readonly type = DELETE_MOVIE_SUCCESS
    constructor(public payload: number) { }
}

export class UpdateMovie implements Action {
    readonly type = UPDATE_MOVIE
    constructor(public payload: Movie) { }
}

export type Actions = AddMovie | DeleteMovie | DeleteMovieSuccess | UpdateMovie | LoadMovie | LoadMovieSucess