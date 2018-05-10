import { Injectable } from '@angular/core';
import { Contact } from 'Types';
import { CONTACTS } from 'App/utils/stubData';

@Injectable()
export class ContactService {

  constructor() { }

  public getContacts(): Array<Contact> {
    return CONTACTS;
  }

}
