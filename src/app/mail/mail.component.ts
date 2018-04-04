import { Component, OnInit, Input } from '@angular/core';
import { EMAILS } from "./utils/stubData";
import { Email } from 'Types';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  @Input() filterValue: string;
  emailList = EMAILS;
  openedEmail: Email;
  emailsForDisplay: Email[];

  constructor() { }

  ngOnInit() {}

  ngDoCheck() {
    this.emailsForDisplay = this.emailList.filter(it => it.subject.toLowerCase().includes(this.filterValue.toLowerCase()));
  }

  openEmail(email: Email) {
    this.openedEmail = email;
  }

  closeEmail() {
    this.openedEmail = null;
  }
}
