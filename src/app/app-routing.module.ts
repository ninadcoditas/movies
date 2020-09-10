import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/movie/add/add.component';
import { UpdateComponent } from './components/movie/update/update.component'
import { HomeComponent } from './components/home/home.component';

import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component'

import { AuthGuardService } from '../app/services/auth-guard.services'
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addmovie', component: AddComponent, canActivate: [AuthGuardService] },
  { path: 'updatemovie', component: UpdateComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
