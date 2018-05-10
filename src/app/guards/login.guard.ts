import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { UserService } from 'App/services/user.service';

@Injectable()
export class LoginGuard implements CanActivate {
  
  constructor(private userService: UserService, private router: Router) { }

  canActivate() {
    if(this.userService.isLogin()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;        
    }
  }
}
