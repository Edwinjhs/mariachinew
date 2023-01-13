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
  setProduct(productos: any){
    this.productselect = productos;
  }
  SelectProduct(eachproduct: any) {
    this.productselect.push(eachproduct)

  }


}
