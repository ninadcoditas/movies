import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';

import { ActionType } from '../model/Action'
import { map, switchMap, mergeMap } from 'rxjs/operators'

import * as AuthActions from '../actions/auth.actions';
import * as MovieActions from '../actions/movie.actions';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';


@Injectable()
export class MovieEffects {

    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) { }

    @Effect()
    loadMovie$ = this.actions$.pipe(
        ofType(MovieActions.LOAD_MOVIE),
        mergeMap(
            action => this.dataService.getMovies().pipe(
                map(movies => (new MovieActions.LoadMovieSucess(movies)))
            )
        )
    )

    @Effect()
    deleteMovie$ = this.actions$.pipe(
        ofType<ActionType>(MovieActions.DELETE_MOVIE),
        mergeMap(
            action => this.dataService.deleteMovie(action.payload).pipe(
                map(users => (new MovieActions.DeleteMovieSuccess(action.payload))),
            )
        )
    )

    @Effect()
    addMovie$ = this.actions$.pipe(
        ofType<ActionType>(MovieActions.ADD_MOVIE),
        mergeMap(
            action => this.dataService.addMovie(action.payload).pipe(
                map(users => (new MovieActions.AddMovieSuccess(action.payload))),
            )
        )
    )

    @Effect()
    updateMovie$ = this.actions$.pipe(
        ofType<ActionType>(MovieActions.UPDATE_MOVIE),
        mergeMap(
            action => this.dataService.updateMovie(action.payload).pipe(
                map(users => (new MovieActions.UpdateMovieSuccess(action.payload))),
            )

        )
    )

}


