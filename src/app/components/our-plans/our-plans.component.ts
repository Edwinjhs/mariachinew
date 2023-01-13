import { Component, OnInit } from '@angular/core';
import { products, servicios } from 'src/app/productos';
import { CartService } from 'src/app/services/cart.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-our-plans',
  templateUrl: './our-plans.component.html',
  styleUrls: ['./our-plans.component.sass']
})
export class OurPlansComponent implements OnInit {

  products: any [] = products;
  servicios: any [] = servicios;
  productslist:any []= [];
  productslistall: any []= [];
  productstorage: any []= [];
  constructor (private cartService: CartService, private localstorage: LocalService){
  }

  ngOnInit(): void {
    // this.productslist = JSON.parse(this.localstorage.getData('PRODUCTO') || '{}');
    // this.productslist = this.cartService.getProductSelect();
    // this.productslistall = this.productslist
    // this.productslistall = this.cartService.getProductSelect();
    // this.productstorage = JSON.parse(this.localstorage.getData('PRODUCTO') || '{}');

  }


  addToCart(eachproduct: any) {
    this.productslist = this.cartService.getProductSelect();
    this.productslist.push(eachproduct);
    this.localstorage.saveData('PRODUCTO', JSON.stringify(this.productslist));



      // console.log(eachproduct)
      // this.productstorage = this.productslist
      // this.productslist = JSON.parse(this.localstorage.getData('PRODUCTO') || '{}');
      // this.productstorage.push(eachproduct)
      // this.localstorage.saveData('PRODUCTO', JSON.stringify(this.productstorage));
      // this.productslist = JSON.parse(this.localstorage.getData('PRODUCTO') || '{}');

    // if (this.productslist.length < 6) {
      // this.productslist.push(eachproduct)
      // this.cartService.SelectProduct({ eachproduct });
      // // localStorage.setItem('PRODUCTO', JSON.stringify(this.productslist));
      // console.log(this.productslist)
      // this.localstorage.saveData('PRODUCTO', JSON.stringify(this.productslist));
      // this.productstorage = JSON.parse(this.localstorage.getData('PRODUCTO') || '{}');
      // console.log(this.productstorage);
    // }
  }
}
