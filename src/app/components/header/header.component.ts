import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  productstorage: any [] = [];
  text: string [] = [];
  ngOnInit(): void {
  this.productstorage = JSON.parse(this.localstorage.getData('PRODUCTO') || '{}');
  }
  constructor(private localstorage: LocalService){
    this.mostrarTexto();
  }

  mostrarTexto(){

    // console.log(localStorage.getItem(('PRODUCTO'));
    // localStorage.getItem(('PRODUCTO') || '{}');
    // console.log(this.localstorage.getData('PRODUCTO'));
  }
  DeleteFromCart()  {
    this.localstorage.removeData('PRODUCTO');

  }
  clearData()  {
    this.localstorage.clearData();
  }

}
