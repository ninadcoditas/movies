import { Action } from '@ngrx/store'
import { Movie } from '../model/Movie'
import * as MovieActions from '../actions/movie.actions'

// const initialState: Array<Movie> = [
//     {
//         "id": 1,
//         "name": "The Dark Knight",

//         "genre": "Action,Crime,Drama"
//     },
//     {
//         "id": 2,
//         "name": "The Shawshank Redemption",

//         "genre": "Drama"
//     },
//     {
//         "id": 3,
//         "name": "Fight Club",

//         "genre": "Drama"
//     }
// ]

const initialState: Array<Movie> = []

export function reducer(state = initialState, action: MovieActions.Actions) {
    switch (action.type) {

        case MovieActions.LOAD_MOVIE_SUCCESS:
            state = action.payload;
            return state

        case MovieActions.ADD_MOVIE_SUCCESS:
            return [...state, action.payload];

        case MovieActions.DELETE_MOVIE_SUCCESS:
            state = state.filter(x => x["id"] != action.payload)
            return state;

        case MovieActions.UPDATE_MOVIE_SUCCESS:
            // state = state.filter(x => x["id"] != action.payload["id"])
            // state = [...state, action.payload].sort(function (a, b) { return a["id"] - b["id"] });
            let newState = [...state];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i]["id"] == action.payload["id"]) {
                    newState[i] = action.payload;
                }
            }
            state = [...newState]
            return state;


        default:
            return state;

    }
}