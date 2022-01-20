import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { PlatillosService } from '../platillos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-platillo',
  templateUrl: './update-platillo.page.html',
  styleUrls: ['./update-platillo.page.scss'],
})
export class UpdatePlatilloPage implements OnInit {



  idPlatillo: any;
  nombre: any;
  categoria: any;
  detalles: any;
  precio: any;
  promocion: 0;
  descuento: any;
  imagen: any;

  base64Data: any;
  converted_image: any;

  private htmlFile: File;

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


  constructor(private route: ActivatedRoute, private router: Router, private _platilloService: PlatillosService) {
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

  updatePlatillo(){
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
    this._platilloService.updatePlatillo(this.idPlatillo, data).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      alert("Platillo Actualizado Exitosamente!!");
      this.router.navigateByUrl("platillos");
    },(error:any)=>{
      console.log("ERROR ===", error);
    }
    )
  }





}
