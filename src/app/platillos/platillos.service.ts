import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor(public http:HttpClient) { }

  addPlatillo(data){
    return this.http.post("http://localhost:60710/api/platillo",data);
  }

  getPlatillos(){
    return this.http.get("http://localhost:60710/api/platillo");
  }

  deletePlatillo(id){
    return this.http.delete("http://localhost:60710/api/platillo/"+id);
  }

  getPlatillo(id){
    return this.http.get("http://localhost:60710/api/platillo/"+id);
  }

  updatePlatillo(id, data){
    return this.http.put("http://localhost:60710/api/platillo/"+id, data);
  }
}
