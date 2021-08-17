import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    if (localStorage.getItem('Token')) {
      let token = JSON.parse(localStorage.getItem('Token') || '');
      if (token != undefined && token != ''&& token.length > 0) {
        return true;
      } else {
        this.router.navigate(['/login']);
      }

    }
    else {
      this.router.navigate(['/login']);
    }

  }
  
}
