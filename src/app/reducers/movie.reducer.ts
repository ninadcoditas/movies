import { Action } from '@ngrx/store'
import { Movie } from '../model/Movie'
import * as MovieActions from '../actions/movie.actions'

const initialState: Array<Movie> = [
    {
        "id": 1,
        "name": "The Dark Knight",
        "year": 2008,
        "genre": "Action,Crime,Drama"
    },
    {
        "id": 2,
        "name": "The Shawshank Redemption",
        "year": 1994,
        "genre": "Drama"
    },
    {
        "id": 3,
        "name": "Fight Club",
        "year": 1999,
        "genre": "Drama"
    }
]

export function reducer(state = initialState, action: MovieActions.Actions) {
    switch (action.type) {
        case MovieActions.ADD_MOVIE:
            return [...state, action.payload];

        case MovieActions.DELETE_MOVIE:
            state = state.filter(x => x["id"] != action.payload)
            return state;

        default:
            return state;

    }
}