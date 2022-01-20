import { Component, OnInit } from '@angular/core';

import { Observable, Subscriber } from 'rxjs';
import { PlatillosService } from './platillos.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.page.html',
  styleUrls: ['./platillos.page.scss'],
})
export class PlatillosPage implements OnInit {



  public platillos: string;

  private htmlFile: File;


  public ArrayPlatillos = Array();


  idPlatillo: any;
  nombre: any;
  categoria: any;
  detalles: any;
  precio: any;
  promocion: 0;
  descuento: any;
  imagen: any;

  base64Data:any;
  converted_image:any;


  constructor(public _platilloService: PlatillosService) {
    this.getPlatillos();
  }


  onFileChanges(event) {
    this.htmlFile = (event.target as HTMLInputElement).files[0];
    this.covertToBase64(this.htmlFile);
  }

  covertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    })
    observable.subscribe((d) => {
      console.log(d);
      this.imagen = d;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      subscriber.next(fileReader.result);
      subscriber.complete();
    }
    fileReader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }

  }

  ngOnInit() {
    this.platillos = "Platillos";
  }


  addPlatillo() {
    console.log(this.nombre, this.categoria, this.detalles, this.precio, this.promocion, this.descuento, this.imagen);
    let data = {
      nombre: this.nombre,
      categoria: this.categoria,
      detalle: this.detalles,
      precio: this.precio,
      promocion: this.promocion,
      descuento: this.descuento,
      imagen: this.imagen
    }

    this._platilloService.addPlatillo(data).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.nombre = '';
      this.categoria = '';
      this.detalles = '';
      this.precio = 0;
      this.promocion = 0;
      this.descuento = 0;
      this.imagen = '';
      this.getPlatillos();
      alert("Platillo Registrado Exitosamente!!");
    },(error:any)=>{
      console.log("ERROR ===", error);
    }
    )
  }


  getPlatillos(){

    this._platilloService.getPlatillos().subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.ArrayPlatillos = res;

    },(error:any)=>{
      console.log("ERROR ===", error);
    }
    )
  }

  deletePlatillo(id){
    this._platilloService.deletePlatillo(id).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      alert("Platillo Eliminado!!");
      this.getPlatillos();
    },(error:any)=>{
      console.log("ERROR ===", error);
    })
  }

}
