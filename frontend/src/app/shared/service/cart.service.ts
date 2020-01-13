import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any;
  private UserData:any
  constructor() { }

  getCartItems() {
    let items = JSON.parse(localStorage.getItem('cart1'));
    return items
  }

  setUserData(data){
    this.UserData = data;
  }

  getUserData(){
    return this.UserData;
  }

  findTotal() {
    let cartobj = JSON.parse(localStorage.getItem('cart1'));
    let items = [];
    let subTotal = [];
    for (let i = 0; i < cartobj.length; i++) {
      let item = cartobj[i];
      if (item) {
        item.total = parseInt(item.unitPrice) * parseInt(item.qty);
        subTotal.push(item.total);
      }
      items.push(item);

    }
    localStorage.setItem('cart1', JSON.stringify(items));
    localStorage.setItem('subtotal', JSON.stringify(subTotal));
  }

  subTotal() {
    let subObj = JSON.parse(localStorage.getItem('subtotal'));
    console.log(subObj);
    let subTotal = 0;
    for (let i = 0; i < subObj.length; i++) {
      subTotal = subTotal + subObj[i];
    }
    console.log("SuBBB", subTotal);

    localStorage.setItem('subtotal', JSON.stringify(subTotal));
    let sub = JSON.parse(localStorage.getItem('subtotal'));
    return sub
  }

  addToCart(item) {
    const valueToFind = item.name;
    console.log(valueToFind);
    const fromStorage = localStorage.getItem('cart1');
    let toFind: any;
    let objectsFromStorage = [];
    if (fromStorage) {
      objectsFromStorage = JSON.parse(fromStorage);
      toFind = objectsFromStorage.filter(function (obj) {
        return obj.name === valueToFind;
      });
      console.log(valueToFind);
    }
    if (toFind && toFind.length > 0) {
      // icrease item qtr +1
      const index = objectsFromStorage.findIndex(x => x.name === valueToFind);
      objectsFromStorage[index].qty++;
      // console.log(objectsFromStorage[index].qty)
      // console.log('hi');
      //
      localStorage.setItem('cart1', JSON.stringify(objectsFromStorage));
    } else {
      item.qty = 1;
      objectsFromStorage.push(item);
      // set loac cart
      const stringToStore = JSON.stringify(objectsFromStorage);
      localStorage.setItem('cart1', stringToStore);
    }

  }

  removeItem(item){
    const valueToFind = item.name;
    console.log(valueToFind);
    const fromStorage = localStorage.getItem('cart1');
    let toFind: any;
    let objectsFromStorage = [];
    if (fromStorage) {
      objectsFromStorage = JSON.parse(fromStorage);
      toFind = objectsFromStorage.filter(function (obj) {
        return obj.name === valueToFind;
      });
      console.log(valueToFind);
    }
    if (toFind && toFind.length > 0) {
      // icrease item qtr +1
      const index = objectsFromStorage.findIndex(x => x.name === valueToFind);
      if( objectsFromStorage[index].qty == 1){
        this.removeById(objectsFromStorage[index].name);
      }else{
        objectsFromStorage[index].qty--;
        localStorage.setItem('cart1', JSON.stringify(objectsFromStorage));
      }

     
    }
  }

  removeById(valueToFind) {
    const fromStorage = localStorage.getItem('cart1');
    const objectsFromStorage = JSON.parse(fromStorage)
    const toFind = objectsFromStorage.filter(function (obj) {
      return obj.name === valueToFind;
    });
    console.log(toFind);
    const index = objectsFromStorage.findIndex(x => x.name === valueToFind);
      objectsFromStorage.splice(index, 1);
      const stringToStore = JSON.stringify(objectsFromStorage);
      console.log(stringToStore);
      // tslint:disable-next-line:prefer-const
      let p = localStorage.setItem('cart1', stringToStore);
      console.log(p)
      return p;

  }

}
