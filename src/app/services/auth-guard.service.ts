import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!localStorage.getItem("enrollmentID")) {
      this.router.navigate(['login']);
      return false;
    }
    if (state.url == "/agreement") {
      let nda = JSON.parse(localStorage.getItem("nda"));
      if (nda.agreementsign) {
        this.router.navigate(['/agreement-print']);
        return false;
      }
    }
    return true;
  }
}