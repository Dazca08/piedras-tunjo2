import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.validateToken(true);
  }

  canLoad(): Promise<boolean> | boolean | Observable<boolean> {
    return this.authService.validateToken(true);
  }

}
