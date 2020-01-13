import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from '@modules/auth/page/register/register.component';
import { HomeComponent } from '@modules/auth/page/home/home.component';
import { AboutComponent } from '@modules/about/page/about/about.component';
import { ContactComponent } from '@modules/contact/page/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/home',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: RegisterComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
