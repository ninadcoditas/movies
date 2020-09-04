import { Action, USER_RUNTIME_CHECKS } from '@ngrx/store'

import * as AuthActions from '../actions/auth.actions'

const initialState = {
    isLoggedIn: false,
    "users": [],
}
export function authreducer(state = initialState, action) {
    switch (action.type) {
        case AuthActions.LOAD_USERS_SUCCESS:
            state = { ...state, users: action.payload }
            return state;
        case AuthActions.SIGNUP_SUCCESS:
            let newUsers = [...state["users"], action.payload]
            state = { ...state, users: newUsers }
            return state
        case AuthActions.LOGIN:
            let validUser = state["users"].filter(x => x["username"] == action.payload.username && x["password"] == action.payload.password).length;
            if (validUser > 0) {
                state = { ...state, isLoggedIn: true }
            }
            return state;
        case AuthActions.LOGOUT:
            state = { ...state, isLoggedIn: false }
            return state;

        default:
            return state;

    }
}