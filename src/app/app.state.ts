import { Movie } from './model/Movie'
export interface AppState {
    readonly movie: Movie[],
    readonly auth
}