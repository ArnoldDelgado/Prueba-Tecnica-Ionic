import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor(public http:HttpClient) { }

  addPlatillo(data){
    return this.http.post("http://localhost/Prueba-Tecnica/WebService/createPlatillo.php",data);
  }

  getPlatillos(){
    return this.http.get("http://localhost/Prueba-Tecnica/WebService/getPlatillos.php");
  }

  deletePlatillo(id){
    return this.http.delete("http://localhost/Prueba-Tecnica/WebService/deletePlatillo.php?id="+id);
  }

  getPlatillo(id){
    return this.http.get("http://localhost/Prueba-Tecnica/WebService/getPlatillo.php?id="+id);
  }

  updatePlatillo(id, data){
    return this.http.put("http://localhost/Prueba-Tecnica/WebService/updatePlatillos.php?id="+id,data);
  }
}
