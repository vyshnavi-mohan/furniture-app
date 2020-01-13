import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureListComponent } from './furniture-list/furniture-list.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureRoutingModule } from './furniture.routing';
import { FurnitureComponent } from './furniture.component';
import { SidenavComponent } from 'app/layout/sidenav/sidenav.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  FurnitureListComponent,
  FurnitureDetailsComponent,
  FurnitureComponent,
  SidenavComponent,
  CartComponent,
  CheckoutComponent
],
  imports: [
    CommonModule,
    FurnitureRoutingModule,
    ReactiveFormsModule
    
  ]

})
export class FurnitureModule { }
