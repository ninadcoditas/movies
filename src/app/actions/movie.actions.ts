import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Movie } from '../model/Movie'

export const ADD_MOVIE = '[MOVIE] Add';
export const DELETE_MOVIE = '[MOVIE] Delete';
export const UPDATE_MOVIE = '[MOVIE] Update';

export class AddMovie implements Action {
    readonly type = ADD_MOVIE
    constructor(public payload: Movie) { }
}

export class DeleteMovie implements Action {
    readonly type = DELETE_MOVIE
    constructor(public payload: number) { }
}

export class UpdateMovie implements Action {
    readonly type = UPDATE_MOVIE
    constructor(public payload: Movie) { }
}

export type Actions = AddMovie | DeleteMovie | UpdateMovie