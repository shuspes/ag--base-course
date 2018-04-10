import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Email, EmailListFilter } from 'Types';
import { MailService } from "App/services/mail.service";
import { AppService } from 'App/services/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterContentChecked {
  protected emailList: Array<Email> = [];
  protected filterObject: EmailListFilter;

  constructor(private appService: AppService, private mailService: MailService) { }

  ngOnInit() {
    this.emailList = this.mailService.getEmails();
    this.filterObject = this.getFilterObject();
  }

  private getFilterObject(): EmailListFilter {
    const filterValue = this.appService.getFilter();
    const source = this.mailService.getSource();
    return {filterValue, source};
  }

  ngAfterContentChecked() {
    this.filterObject = this.getFilterObject();    
  }

  openEmail(email: Email): void {
    this.mailService.openEmail(email);
  }
}
