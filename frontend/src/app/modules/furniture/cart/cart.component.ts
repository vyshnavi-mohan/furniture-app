import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CartService } from '@shared/service/cart.service';
import { MessageService } from '@shared/service/message.service';


// import * as $ from 'jquery';
// import * as myjQuery from 'jquery';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CartComponent implements OnInit {

  cartItem: any;
  cItem: any;
  items: any;
  subtotal: any;

  constructor(private messageService:MessageService,  private cartApi: CartService,private ref: ChangeDetectorRef ) {

  }

  ngOnInit() {
    this.cartApi.findTotal();
    this.cartItem = JSON.parse(localStorage.getItem("cart1"));
    this.subtotal = this.cartApi.subTotal();
  }

  deleteitem(deleteitemName) {
    console.log(deleteitemName);
    this.cartApi.removeById(deleteitemName);
    this.cartItem = this.cartApi.getCartItems();
    this.cartApi.findTotal();
    this.subtotal = this.cartApi.subTotal();
    console.log("cartItem",this.cartItem);
    this.ref.markForCheck(); 

  }

  remove(item){
    this.cartApi.removeItem(item);
    this.cartItem = this.cartApi.getCartItems();
    this.cartApi.findTotal();
    this.subtotal = this.cartApi.subTotal();
    console.log("cartItem",this.cartItem);
    this.ref.markForCheck(); 
    this.messageService.sendCartQuanity(localStorage.getItem('cart1'));
  }
  add(item){
    this.cartApi.addToCart(item);
    this.cartItem = this.cartApi.getCartItems();
    this.cartApi.findTotal();
    this.subtotal = this.cartApi.subTotal();
    console.log("cartItem",this.cartItem);
    this.ref.markForCheck(); 

    
  }


}
