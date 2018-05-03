import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactListComponent } from "./list/list.component";
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactListComponent,
    ContactComponent
  ],
  exports: []
})
export class ContactModule { }
