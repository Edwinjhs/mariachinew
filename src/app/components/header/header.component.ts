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
      this.productstorage = JSON.parse(this.localstorage.getData('PRODUCTO') || '[]');

  }
  constructor(private localstorage: LocalService){
  }
  getStorage(){
    this.productstorage = JSON.parse(this.localstorage.getData('PRODUCTO') || '[]');
  }
  getItemStorage(){
    this.getStorage()
  }


  DeleteFromCart(index: number)  {
    this.localstorage.removeItemData('PRODUCTO', index);
    this.getStorage()
  }
  clearData()  {
    this.localstorage.clearData();
    this.getStorage()
  }



  whatsappMsg(){
      let text= "Me interesan los siguientes productos y/o servicios:"+"\n";
      this.productstorage.forEach(function(cartselection){
        text += cartselection.name + ", cantidad de producto " + cartselection.quantity + ", tiene un precio de " + cartselection.price + "$." + "\n"
      })
      this.localstorage.MsgWhatsapp(text)
    }

}
