import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { SharedModule } from '@shared/shared.module';

import { AuthRoutingModule } from './auth.routing';
import { HomeComponent } from './page/home/home.component';
import { FooterComponent } from 'app/layout/footer/footer.component';
import { AboutComponent } from '@modules/about/page/about/about.component';
import { ContactComponent } from '@modules/contact/page/contact/contact.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
