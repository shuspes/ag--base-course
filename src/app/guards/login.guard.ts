import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppService } from 'App/services/app.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  
  constructor(private appService: AppService, private router: Router) { }

  canActivate() {
    if(this.appService.isLogin()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;        
    }
  }
}
