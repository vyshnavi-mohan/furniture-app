import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private categoryName = new Subject<any>();
  private cart = new Subject<any>();


  getCategory(): Observable<any> {
      return this.categoryName.asObservable();
  }

  sendCategory(message: string){
      this.categoryName.next({ text: message });
  }

  getCartQuanity(): Observable<any> {
    return this.cart.asObservable();
  }

  sendCartQuanity(items){
    this.cart.next(items);
  }
  
  
}
