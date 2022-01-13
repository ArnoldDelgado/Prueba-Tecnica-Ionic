import { Component, OnInit } from '@angular/core';
import { PlatillosService } from '../platillos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-platillo-detalles',
  templateUrl: './platillo-detalles.page.html',
  styleUrls: ['./platillo-detalles.page.scss'],
})
export class PlatilloDetallesPage implements OnInit {

  idPlatillo: any;
  nombre: any;
  categoria: any;
  detalles: any;
  precio: any;
  promocion: 0;
  descuento: any;
  imagen: any;

  constructor(private route: ActivatedRoute, private _platilloService: PlatillosService) {
    this.route.params.subscribe((param: any) => {
      this.idPlatillo = param.id;
      this.getPlatillo();
      console.log(this.idPlatillo);
    })

  }

  ngOnInit() {
  }

  getPlatillo() {
    this._platilloService.getPlatillo(this.idPlatillo).subscribe((res: any) => {
      console.log("SUCCESS ===", res);
      let platillo = res[0];
      this.nombre = platillo.nombre;
      this.categoria = platillo.categoria;
      this.detalles = platillo.detalle;
      this.precio = platillo.precio;
      this.promocion = platillo.promocion;
      this.descuento = platillo.descuento;
      this.imagen = platillo.imagen;
    }, (error: any) => {
      console.log("ERROR ===", error);
    }
    )
  }

}
