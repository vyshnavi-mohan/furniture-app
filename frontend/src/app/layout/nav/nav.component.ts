import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { environment } from '@env';
import { Observable } from 'rxjs';
import { ThemeService } from 'app/core/service/theme.service';
import { Router } from '@angular/router';
import { MessageService } from '@shared/service/message.service';
import { Subscription } from 'rxjs';
import { CartService } from '@shared/service/cart.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public version = environment.version;
  public repoUrl = 'https://github.com/mathisGarberg/angular-folder-structure';
  public isDarkTheme$: Observable<boolean>;
  public cartItems = '0';
  navItems = [
    { link: '/dashboard/home', title: 'Home' },
    { link: '/about', title: 'About' },
    { link: '/contact', title: 'Contact' },
    { link: '/cart', title: 'Cart' }
  ];
  subscription: Subscription;
  constructor(
    private themeService: ThemeService,
    private router:Router,
    private messageService:MessageService,
    private ref: ChangeDetectorRef,
    private cartService: CartService,
  ) {

    this.subscription = this.messageService.getCartQuanity().subscribe(message => {
      const items = this.cartService.getCartItems();
      if (items){
        this.cartItems = items.length;
      }
      this.ref.markForCheck();

    });
  }

  ngOnInit() {
    this.isDarkTheme$ = this.themeService.getDarkTheme();
  }

  toggleTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

}
