import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

export const LOGIN = '[AUTH] Add';
export const LOGOUT = '[AUTH] Delete';
export const SIGNUP = '[AUTH] Signup'
export class Login implements Action {
    readonly type = LOGIN
    constructor(public payload) { }
}
export class Logout implements Action {
    readonly type = LOGOUT
    constructor() { }
}

export class Signup implements Action {
    readonly type = SIGNUP
    constructor(public payload) { }
}

export type Actions = Login | Logout 