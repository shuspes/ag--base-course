import { Injectable } from '@angular/core';
import { Email } from 'Types';
import { EMAILS } from 'App/utils/stubData';

@Injectable()
export class MailService {
  private emailList: Array<Email> = [];
  private openedEmail: Email;

  constructor() { }

  public getEmails(): Array<Email> {
    return EMAILS;
  }

  public isOpenDetail(): boolean {
    return this.openedEmail != null;
  }

  public openEmail(email: Email): void {
    this.setOpenedEmail(email);
  }

  public closeEmail(): void {
    this.setOpenedEmail(undefined);
  }

  public getOpenedEmail(): Email {
    return this.openedEmail;
  }

  private setOpenedEmail(email: Email): void {
    this.openedEmail = email;
  }
}
