import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  productstorage: any [] = [];
  mostrar: boolean = true;
  ngOnInit(): void {
  this.productstorage = JSON.parse(this.localstorage.getData('PRODUCTO') || '{}');

  }
  constructor(private localstorage: LocalService){
    this.mostrarStorage();
  }
    mostrarStorage(){
    // console.log(localStorage.getItem(('PRODUCTO'));
    // localStorage.getItem(('PRODUCTO') || '{}');
    // console.log(this.localstorage.getData('PRODUCTO'));
  }
  DeleteFromCart()  {
    this.localstorage.removeData('PRODUCTO.eachproduct1');



  }
  clearData()  {
    this.localstorage.clearData();



  }



}





