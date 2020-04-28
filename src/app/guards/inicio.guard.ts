import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { resolve } from 'dns';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InicioGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise(async resolve => {
        const auth = await this.authService.validateToken();
        if (auth) {
          this.router.navigateByUrl('/home');
        }
        resolve(!auth); // si está auttenticado no carga la página pero es redireccionado a home
      });
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      return new Promise(async resolve => {
        const auth = await this.authService.validateToken();
        if (auth) {
          this.router.navigateByUrl('/home');
        }
        resolve(!auth); // si está auttenticado no carga la página pero es redireccionado a home
      });
  }
}
