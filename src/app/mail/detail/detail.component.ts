import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Email } from "Types";
import { MailService } from "App/services/mail.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterContentChecked {
  protected email: Email;

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.email = this.mailService.getOpenedEmail();
  }

  ngAfterContentChecked() {
    this.email = this.mailService.getOpenedEmail();
  }

  closeEmail() {
    this.mailService.closeEmail();
  }
}
