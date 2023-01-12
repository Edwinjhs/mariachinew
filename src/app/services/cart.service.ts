import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  productselect:any []= [];
  localstorage:any[]= [];


  getProductSelect(){
    return this.productselect
  }

  SelectProduct(eachproduct: any) {
    this.productselect.length
    this.productselect.push(eachproduct)
  }

  selectproductlocalstorage(){

  }

}
