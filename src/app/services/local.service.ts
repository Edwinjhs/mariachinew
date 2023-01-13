import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private cartservice: CartService) { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
    let newObj = JSON.parse(localStorage.getItem('PRODUCTO') || '[]');
    this.cartservice.setProduct(newObj)
  }

  public removeItemData(key: string, index: number){
    // console.log("%cindex: " + index,"color:green")
    let newObj = JSON.parse(localStorage.getItem(key) || '[]');
    newObj.splice(index, 1)
    // console.log(newObj)
    localStorage.setItem(key, JSON.stringify(newObj));
    this.cartservice.setProduct(newObj)
  }


  MsgWhatsapp(product: string) {
    var url = 'https://api.whatsapp.com/send?phone=573014432138&text=' + encodeURIComponent(product);
    window.open(url);
  }
}
