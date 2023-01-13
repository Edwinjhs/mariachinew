import { Component, OnInit } from '@angular/core';
import { imagenes, videos } from 'src/app/galery';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.sass']
})
export class GaleryComponent implements OnInit{
  imgshowall: any[] = imagenes;
  videos: any[] = videos;
  imagenes: any[] = imagenes;
  allimg:any [] = [];
  constructor(){}
  ngOnInit(): void {
    this.allimg = this.imagenes
  }

  showallimg(){
    this.imagenes = this.allimg
  }
  filtertypes(value:string){
    this.imagenes= []
    this.allimg.forEach((element) => {
    console.log(element);
        if (element.type === value){
          this.imagenes.push(element)
          console.log(element)
        }
    })
  };

}

