import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailComponent } from './mail.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { FilterEmailPipe } from '../pipes/filter-email.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MailComponent,
    MenuComponent,
    ListComponent,
    DetailComponent,
    FilterEmailPipe
  ]
})
export class MailModule { }
