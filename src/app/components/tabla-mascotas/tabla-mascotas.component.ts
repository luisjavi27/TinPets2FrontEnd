import { Component, OnInit } from '@angular/core';
import { mascotasModel } from 'src/app/models/mascotas';
import { MascotasService } from '../../services/mascotas/mascotas.service';


@Component({
  selector: 'app-tabla-mascotas',
  templateUrl: './tabla-mascotas.component.html',
  styleUrls: ['./tabla-mascotas.component.css']
})
export class TablaMascotasComponent implements OnInit {

  public mascotas: mascotasModel[]=[];

  constructor(private MascotasService: MascotasService) { }

  async ngOnInit(): Promise<void> {
    this.mascotas= await this.obtenerMascotas();
  }

  public async  obtenerMascotas(): Promise<any> {
    try {
      const response = await this.MascotasService.obtenerMascotas();
      console.log(response);
      return response.datos;
    }

    catch (error) {
      console.log(error);
    }

  }

  public  eliminarMascota(id: number){
    this.MascotasService.eliminarMascota(id).then(async response => {
      if(response.message==='deleted'){
        this.mascotas= await this.obtenerMascotas();
        alert('Registro eliminado correctamente') 
      }

    }).catch((error) => {
      console.log(error);
    })
  }

}
function Async(response: any): ((value: any) => any) | null | undefined {
  throw new Error('Function not implemented.');
}

