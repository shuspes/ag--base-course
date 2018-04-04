import { Component, OnInit } from '@angular/core';
import { Email } from 'Types';
import { MailService } from "App/services/mail.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  protected emailList: Array<Email> = [];

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.emailList = this.mailService.getEmails();
  }

  openEmail(email: Email): void {
    this.mailService.openEmail(email);
  }
}
