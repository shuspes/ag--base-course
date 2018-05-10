import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MailComponent } from './mail.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { FilterEmailPipe } from '../pipes/filter-email.pipe';

import { LoginGuard } from "../guards/login.guard";

const routes: Routes = [
  { path: '', component: MailComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MailComponent,
    MenuComponent,
    ListComponent,
    DetailComponent,
    FilterEmailPipe
  ],
  providers: [
    LoginGuard
  ]
})
export class MailModule { }
