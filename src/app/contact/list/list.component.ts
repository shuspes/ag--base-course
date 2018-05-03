import { Component, OnInit } from '@angular/core';
import { ContactService } from 'App/services/contact.service';
import { Contact } from 'App/@types';

@Component({
  selector: 'app-contact-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contactList: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactList = this.contactService.getContacts();
  }

}
