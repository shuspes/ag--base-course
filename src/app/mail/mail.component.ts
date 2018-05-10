import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Email } from "Types";
import { AppService } from "App/services/app.service";
import { MailService } from "App/services/mail.service";

declare var gapi: any;

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
  providers: [MailService]
})
export class MailComponent implements OnInit, AfterContentChecked {
  protected filterValue: string = "";
  protected isOpenDetail: boolean;

  constructor(private appService: AppService, private mailService: MailService) { }

  ngOnInit() {
    this.filterValue = this.appService.getFilter();
    this.isOpenDetail = this.mailService.isOpenDetail();
  }

  ngAfterContentChecked() {
    this.filterValue = this.appService.getFilter();
    this.isOpenDetail = this.mailService.isOpenDetail();
  }

  // handleLoadEmails() : void {
  //   console.log("gapi", gapi);
    
  //   gapi.load('client', this.loadEmails());
  // }

  // private loadEmails() : void {
  //   gapi.client.init({
  //     'apiKey': 'AIzaSyDSPo2kSGrrcmOtgXnGRQR-Ee7CezPmC2A',
  //     'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
  //     'clientId': '374616064338-phn1e7asfumi0s6usulekr03pgrv0amc.apps.googleusercontent.com',
  //     'scope': 'profile',
  //   }).then(data => {
  //     console.log("data", data);
  //   });
  // }
}
