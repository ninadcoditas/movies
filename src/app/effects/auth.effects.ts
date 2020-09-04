import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';

import { map, switchMap, mergeMap } from 'rxjs/operators'

import { ActionType } from '../model/Action'

import * as AuthActions from '../actions/auth.actions';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';


@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) { }

    @Effect()
    loadUsers$ = this.actions$.pipe(
        ofType(AuthActions.LOAD_USERS),
        mergeMap(
            action => this.dataService.getUsers().pipe(
                map(users => (new AuthActions.Load_Users_Success(users))),

            )
        )
    )

    @Effect()
    signUp$ = this.actions$.pipe(
        ofType<ActionType>(AuthActions.SIGNUP),
        mergeMap(
            action => this.dataService.signUp(action.payload).pipe(
                map(users => (new AuthActions.Signup_Success(users))),
            )
        )
    )

}


