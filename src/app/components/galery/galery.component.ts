import { Component } from '@angular/core';
import { imagenes, videos } from 'src/app/galery';
import { GaleryService } from 'src/app/services/galery.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.sass']
})
export class GaleryComponent {
  videos: any[] = videos;
  imagenes: any[] = imagenes;

  constructor(private galeryService: GaleryService){}

}
