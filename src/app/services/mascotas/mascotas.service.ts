import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private http: HttpClient) { }

  public obtenerMascotas(): Promise<any>{
    const url = `${environment.apiUrl}/obtenerMascotas`;
    return this.http.get(url).toPromise();
  }


  
  public obtenerMascota(id: number): void{}
  public agregarMascota(mascota:any){}
  public actualizarMascota(mascota:any, id: number){}
  public eliminarMascota(id:number): Promise<any>{
     return this.http.delete(`${environment.apiUrl}/eliminarmascota/${id}`).toPromise();
  }
}
