import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Email } from 'Types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() emails: Email[];
  @Output() onOpenEmail = new EventEmitter<Email>();

  constructor() { }

  ngOnInit() {
  }

  openEmail(email: Email) {
    this.onOpenEmail.emit(email);
  }

}
