import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'


export const LOGIN = '[AUTH] Add';
export const LOGOUT = '[AUTH] Logout';
export const SIGNUP = '[AUTH] Signup'
export const SIGNUP_SUCCESS = '[AUTH] Signup_Success'
export const LOAD_USERS = '[AUTH] Load_Users'
export const LOAD_USERS_SUCCESS = '[AUTH] Load_Users_Success'
export class Load_Users implements Action {
    readonly type = LOAD_USERS
    constructor() { }
}

export class Load_Users_Success implements Action {
    readonly type = LOAD_USERS_SUCCESS
    constructor(public payload) { }
}
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
    constructor(public payload: any) { }
}

export class Signup_Success implements Action {
    readonly type = SIGNUP_SUCCESS
    constructor(public payload: any) { }
}

export type Actions = Login | Logout | Signup_Success | Signup | Load_Users | Load_Users_Success