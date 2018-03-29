import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Email } from "../Email";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() email: Email;
  @Output() onCloseEmail = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  closeEmail() {
    this.onCloseEmail.emit();
  }
}
