import { Component, OnInit } from '@angular/core';
import { Email } from 'Types';
import { MailService } from "App/services/mail.service";
import { AppService } from 'App/services/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  protected emailList: Array<Email> = [];
  protected filterValue: string = "";

  constructor(private appService: AppService, private mailService: MailService) { }

  ngOnInit() {
    this.emailList = this.mailService.getEmails();
    this.filterValue = this.appService.getFilter();
  }

  ngDoCheck() {
    this.filterValue = this.appService.getFilter();
  }

  openEmail(email: Email): void {
    this.mailService.openEmail(email);
  }
}
