import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state'
@Injectable({
    providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
    constructor(public store: Store<AppState>, public router: Router) { }
    isLoggedIn
    async canActivate(): Promise<boolean> {
        this.isLoggedIn = await this.helper()
        // debugger;
        if (this.isLoggedIn == false) {
            this.router.navigate(['home'])
            return false
        }
        return this.isLoggedIn;
    }

    helper() {
        const prom = new Promise((resolve, reject) => {
            this.store.select("auth").subscribe((data) => {
                resolve(data["isLoggedIn"])
            });
        })
        return prom;
    }
}