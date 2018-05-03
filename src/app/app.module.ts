import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FilterComponent } from './shared/header/filter/filter.component';
import { MainMenuComponent } from './shared/header/menu/menu.component';

import { LoginFormComponent } from './forms/login-form/login-form.component';

import { AppService } from "./services/app.service";

import { LoginFormGuard } from "./guards/login-form.guard";

const routes: Routes = [
  { 
    path: 'mails',
    loadChildren: 'app/mail/mail.module#MailModule'      
  },
  { 
    path: 'contacts',
    loadChildren: 'app/contact/contact.module#ContactModule'  
  },
  { 
    path: 'login',
    component: LoginFormComponent,
    canActivate: [LoginFormGuard]
  },
  {
    path: "**",
    redirectTo: '/mails'
  }
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
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppService,
    LoginFormGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
