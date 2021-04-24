import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated().then((status:boolean)=> {
            console.log(status)
            if (status) return status;
            else {
                return this.router.navigate(['/'])
            }
        })
    }
    canActivateChild(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated().then((status:boolean)=> {
            console.log(status)
            if (status) return status;
            else {
                return this.router.navigate(['/'])
            }
        })
    }
}