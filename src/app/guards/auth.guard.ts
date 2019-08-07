import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(ActivatedRouteSnap, RouterStateSnapshot) {
    let value = localStorage.getItem('token');

    if(value)
      return true;

    this.router.navigate(['user', 'login']);
    return false;
  }

}
