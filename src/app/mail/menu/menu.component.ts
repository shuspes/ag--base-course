import { Component, OnInit } from '@angular/core';
import { MailService } from 'App/services/mail.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private mailService: MailService) { }

  ngOnInit() {
  }

  changeSource(source: string): void {
    this.mailService.setSource(source);
  }
}
