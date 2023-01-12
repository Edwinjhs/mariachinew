import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/productos';
import { CartService } from 'src/app/services/cart.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-our-plans',
  templateUrl: './our-plans.component.html',
  styleUrls: ['./our-plans.component.sass']
})
export class OurPlansComponent implements OnInit {

  products: any [] = products;
  productslist:any []= [];
  productslistall: any []= [];
  productstorage: any []= [];
  constructor (private cartService: CartService, private localstorage: LocalService){
  }

  ngOnInit(): void {
    this.productslist = this.cartService.getProductSelect();
    this.productslistall = this.productslist
    this.productslistall = this.cartService.getProductSelect();
    this.productstorage = JSON.parse(this.localstorage.getData('PRODUCTO') || '{}');
  }

  addToCart(eachproduct: any) {
    if (this.productslistall.length < 6) {
      this.cartService.SelectProduct({ eachproduct });
      // localStorage.setItem('PRODUCTO', JSON.stringify(this.productslist));
      this.localstorage.saveData('PRODUCTO', JSON.stringify(this.productslist));
      this.productstorage = JSON.parse(this.localstorage.getData('PRODUCTO') || '{}');
      // console.log(this.productstorage);
    }
  }
}
