import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mascotasModel } from 'src/app/models/mascotas';
import { MascotasService } from '../../services/mascotas/mascotas.service';
import { DataMascotaService } from '../../services/data-mascota/data-mascota.service';



@Component({
  selector: 'app-ficha-mascota',
  templateUrl: './ficha-mascota.component.html',
  styleUrls: ['./ficha-mascota.component.css']
})
export class FichaMascotaComponent implements OnInit {

  public mascotas: mascotasModel[]=[];
  
  
  

  constructor(private MascotasService: MascotasService, private router: Router, public dataMascotaService:DataMascotaService) { }

  async ngOnInit(): Promise<void> {
    this.mascotas= await this.obtenerMascotas();
  }


  public async  obtenerMascota(id: number): Promise<any> {
    this.dataMascotaService.info=id;
    this.router.navigate([`/formularioEditarMascota/${id}`]);
    // try {
    //   const response = await this.MascotasService.obtenerMascota(id);
     
    //   return response.datos;
    // }

    // catch (error) {
    //   this.router.navigate(['/error']);
    // }

  }

  public async  obtenerMascotas(): Promise<any> {
    try {
      const response = await this.MascotasService.obtenerMascotas();
      console.log(response);
      return response.datos;
    }

    catch (error) {
      this.router.navigate(['/error']);
    }

  }

  public  eliminarMascota(id: number){
    this.MascotasService.eliminarMascota(id).then(async response => {
      if(response.message==='deleted'){
        this.mascotas= await this.obtenerMascotas();
        alert('Registro eliminado correctamente') 
      }
 
    }).catch((error) => {
      this.router.navigate(['/error']);
    })
  }

}



