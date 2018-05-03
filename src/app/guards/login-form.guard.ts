import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppService } from 'App/services/app.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginFormGuard implements CanActivate {

  constructor(private appService: AppService, private router: Router) { }

  canActivate() {
    if(this.appService.isLogin()) {
      this.router.navigate(['/mails']);      
      return false;
    } else {
      return true;        
    }
  }
}
