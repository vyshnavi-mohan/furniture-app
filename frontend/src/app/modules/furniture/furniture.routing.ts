import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FurnitureListComponent } from './furniture-list/furniture-list.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureComponent } from './furniture.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  
  {
    path: '',
    component:FurnitureComponent,
    children: [
      {
        path: 'list/:category',
        component: FurnitureListComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'details/:_id',
        component: FurnitureDetailsComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FurnitureRoutingModule {}
