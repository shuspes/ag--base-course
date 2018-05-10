import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from "./list/list.component";
import { ContactComponent } from './contact.component';

import { LoginGuard } from "../guards/login.guard";

const routes: Routes = [
  { path: '', component: ContactComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)    
  ],
  declarations: [
    ContactListComponent,
    ContactComponent
  ],
  providers: [
    LoginGuard
  ]
})
export class ContactModule { }
