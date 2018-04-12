import { Component } from '@angular/core';
import { AppService } from 'App/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public username: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.username = this.appService.getUserName();
  }

  ngAfterContentChecked() {
    this.username = this.appService.getUserName();
  }
}
