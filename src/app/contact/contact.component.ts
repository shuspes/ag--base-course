import { Component, OnInit } from '@angular/core';
import { ContactService } from 'App/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
