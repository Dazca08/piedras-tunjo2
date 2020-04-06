import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthenticate()) {
      this.router.navigateByUrl('/login');
    }
    return this.authService.isAuthenticate();
  }

  canLoad(): boolean {
    if (!this.authService.isAuthenticate()) {
      this.router.navigateByUrl('/login');
    }
    return this.authService.isAuthenticate();
  }

}
