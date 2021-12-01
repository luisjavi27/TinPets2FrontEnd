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

  public obtenerMascota(id: number): Promise<any>{
    const url = `${environment.apiUrl}/obtenerMascota/${id}`;
    
    return this.http.get(url).toPromise();
  }

  public agregarMascota(mascota:any){
    const url=`${environment.apiUrl}/agregarmascota`;
    return this.http.post(url, mascota).toPromise();
  }

  public actualizarMascota(mascota:any, id: number){
    const url=`${environment.apiUrl}/editarmascota/${id}`;
    return this.http.put(url, mascota).toPromise();
  }

  public eliminarMascota(id:number): Promise<any>{
     return this.http.delete(`${environment.apiUrl}/eliminarmascota/${id}`).toPromise();
  }
}
