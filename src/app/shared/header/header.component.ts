import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { UserService } from 'App/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {

  public userName: string = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userName = this.userService.getUserName();
  }

  ngAfterContentChecked() {
    this.userName = this.userService.getUserName();
  }

  public logout(): void {
    this.userService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
