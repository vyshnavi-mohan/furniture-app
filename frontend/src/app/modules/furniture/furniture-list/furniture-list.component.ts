import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FurnitureApiService } from '@shared/service/furniture-api.service';
import { CartService } from '@shared/service/cart.service';
import { Subscription } from 'rxjs';
import { MessageService } from '@shared/service/message.service';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FurnitureListComponent implements OnInit {

  catName: any;
 
  subscription: Subscription;
  grocery: any;
  furniturelist: any;
  category: any;
  Products : any = [];
  constructor( private router: Router , private cartApi: CartService, private furnitureApiService: FurnitureApiService, private activatedRoute: ActivatedRoute, private ref: ChangeDetectorRef, private messageService: MessageService) {
   
    this.subscription = this.messageService.getCategory().subscribe(message => {
       this.furniturelist = this.furnitureApiService.getItemsWithCategory(message.text).pipe();
      this.ref.markForCheck();
      console.log(message);
     
    });
   
  }


 
  ngOnInit() {
   
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('category'));
      console.log('category');
     console.log(params.get(''));
      this.catName = params.get('category');
    });
    this.ref.markForCheck();
   
    this.furniturelist = this.furnitureApiService.getAllFurniture().pipe();
 
    console.log(this.Products);



   
  }
  ngOnDestroy() {
    // unsubscribing to ensure no memory leaks
    this.subscription.unsubscribe();
   }
  details() {
    this.router.navigate(['furniture/details']);
  }

  addToCart(item) {
    console.log(item)
    this.cartApi.addToCart(item);
  this.messageService.sendCartQuanity(localStorage.getItem('cart1'));

  }
}
