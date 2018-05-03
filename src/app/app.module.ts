import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FilterComponent } from './shared/header/filter/filter.component';
import { MainMenuComponent } from './shared/header/menu/menu.component';

import { LoginFormComponent } from './forms/login-form/login-form.component';

import { AppService } from "./services/app.service";

import { ContactModule } from "./contact/contact.module";
import { MailModule } from "./mail/mail.module";

import { LoginGuard } from "./guards/login.guard";
import { LoginFormGuard } from "./guards/login-form.guard";

const routes: Routes = [
  { path: 'mails', component: MailComponent, canActivate: [LoginGuard] },
  { path: 'contacts', component: ContactComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginFormComponent, canActivate: [LoginFormGuard] },
  { path: "**", redirectTo: '/mails' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    MainMenuComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ContactModule,
    MailModule
  ],
  providers: [
    AppService,
    LoginGuard,
    LoginFormGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
