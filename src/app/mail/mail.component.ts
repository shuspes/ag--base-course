import { Component, OnInit, DoCheck } from '@angular/core';
import { Email } from "Types";
import { AppService } from "App/services/app.service";
import { MailService } from "App/services/mail.service";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
  providers: [MailService]
})
export class MailComponent implements OnInit, DoCheck {
  protected filterValue: string = "";
  protected isOpenDetail: boolean;

  constructor(private appService: AppService, private mailService: MailService) { }

  ngOnInit() {
    this.filterValue = this.appService.getFilter();
    this.isOpenDetail = this.mailService.isOpenDetail();
  }

  ngDoCheck() {
    this.filterValue = this.appService.getFilter();
    this.isOpenDetail = this.mailService.isOpenDetail();
    //TODO: remove
    // this.emailsForDisplay = this.emailList.filter(it => it.subject.toLowerCase().includes(this.filterValue.toLowerCase()));
  }
}
