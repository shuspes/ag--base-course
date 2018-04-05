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
  protected filterValue: string = "";
  protected filterObject: EmailListFilter;

  constructor(private appService: AppService, private mailService: MailService) { }

  ngOnInit() {
    this.emailList = this.mailService.getEmails();
    this.filterValue = this.appService.getFilter();
    this.filterObject = this.getFilterObject();
  }

  private getFilterObject(): EmailListFilter {
    const filterValue = this.appService.getFilter();
    return {filterValue};
  }

  ngAfterContentChecked() {
    this.filterValue = this.appService.getFilter();
    this.filterObject = this.getFilterObject();    
  }

  openEmail(email: Email): void {
    this.mailService.openEmail(email);
  }
}
