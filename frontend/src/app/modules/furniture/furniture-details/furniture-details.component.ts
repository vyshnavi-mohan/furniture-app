import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FurnitureApiService } from '@shared/service/furniture-api.service';
import { CartService } from '@shared/service/cart.service';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FurnitureDetailsComponent implements OnInit {

  furnituredetails:any;
  details:any;
  id:string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private api: FurnitureApiService,
    private ref: ChangeDetectorRef,
    private cartApi: CartService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('_id'));
      this.id=params.get('_id');
    });

    this.loadDetails(this.id);
  }

  loadDetails(id){
    this.furnituredetails = this.api.getFurnituredetails(id).subscribe(
      (result) => {
        this.details = result;
        console.log(result);
        this.ref.markForCheck();
      }
    )
  }

  addToCart(item) {
    console.log(item)
    this.cartApi.addToCart(item);

  }

}
