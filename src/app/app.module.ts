import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie/movie-card/movie-card.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/movie.reducer';
import { authreducer } from './reducers/auth.reducer'
import { HeaderComponent } from './components/header/header.component';
import { AddComponent } from './components/movie/add/add.component';
import { UpdateComponent } from './components/movie/update/update.component'
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from './effects/auth.effects';
import { MovieEffects } from './effects/movie.effects'
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCardComponent,
    AddComponent,
    UpdateComponent,
    HomeComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreModule.forRoot({
      movie: reducer,
      auth: authreducer
    }),
    EffectsModule.forRoot([AuthEffects, MovieEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
