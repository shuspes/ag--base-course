import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import { HeaderComponent } from './shared/header/header.component';
import { FilterComponent } from './shared/header/filter/filter.component';
import { MainMenuComponent } from './shared/header/menu/menu.component';
import { MenuComponent } from './mail/menu/menu.component';
import { ListComponent } from './mail/list/list.component';
import { DetailComponent } from './mail/detail/detail.component';

import { AppService } from "./services/app.service";
import { FilterEmailPipe } from './pipes/filter-email.pipe';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';

//NOTE: routing
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from "./contact/list/list.component";
import { LoginGuard } from "./guards/login.guard";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'mails', component: MailComponent, canActivate: [LoginGuard] },
  { path: 'contacts', component: ContactComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginFormComponent },
  
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    HeaderComponent,
    FilterComponent,
    MainMenuComponent,
    MenuComponent,
    ListComponent,
    DetailComponent,
    FilterEmailPipe,
    LoginFormComponent,
    ContactComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
