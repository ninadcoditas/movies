import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../app/reducers/movie.reducer';
import { authreducer } from '../app/reducers/auth.reducer'

export {
    HttpClientModule,
    StoreModule,
    reducer,
    authreducer
}