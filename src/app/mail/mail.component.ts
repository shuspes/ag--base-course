import { Component, OnInit } from '@angular/core';
import { EMAILS } from "./utils/stubData";
import { Email } from "Types";
import { AppService } from "App/services/app.service";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  protected filterValue: string = "";
  emailList: Email[] = EMAILS;
  openedEmail: Email;
  emailsForDisplay: Email[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.filterValue = this.appService.getFilter();
  }

  ngDoCheck() {
    this.filterValue = this.appService.getFilter();
    this.emailsForDisplay = this.emailList.filter(it => it.subject.toLowerCase().includes(this.filterValue.toLowerCase()));
  }

  openEmail(email: Email) {
    this.openedEmail = email;
  }

  closeEmail() {
    this.openedEmail = null;
  }
}
