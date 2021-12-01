import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mascotasModel } from 'src/app/models/mascotas';
import { MascotasService } from '../../services/mascotas/mascotas.service';
import { DataMascotaService } from '../../services/data-mascota/data-mascota.service';


@Component({
  selector: 'app-actualizar-mascota',
  templateUrl: './actualizar-mascota.component.html',
  styleUrls: ['./actualizar-mascota.component.css']
})
export class ActualizarMascotaComponent implements OnInit {

  public formActMascota: FormGroup = new FormGroup({});
 
  public mascota: mascotasModel={
    idmascotas: 0,
    nombre: '',
    edad: 0,
    especie: '',
    fundacion: '',
    especial: ''
  };

 

    
  constructor(private formBuilder: FormBuilder, public MascotasService: MascotasService, private router: Router, public dataMascotaService:DataMascotaService) { }
  
    async ngOnInit(): Promise<void> {
      this.buildForm();
       this.obtenerMascota(this.dataMascotaService.info);
    }

    private buildForm(){
      this.formActMascota = this.formBuilder.group({
        nombre:['', Validators.required],
        edad: ['', Validators.required],
        especie: ['', Validators.required],
        fundacion: ['', Validators.required],
        especial: [''],
      })
    }

    public actualizarMascota(){
      
      console.log("data: ",this.dataMascotaService.info, "formulario: ",this.formActMascota.value)
      this.MascotasService.actualizarMascota(this.formActMascota.value, this.dataMascotaService.info).then(response => {
        alert("Mascota actualizada correctamente");
        this.router.navigate(['/mascotas']);
      }).catch(error => {
        this.router.navigate(['/error']);
      })
    }

    public async  obtenerMascota(id: number): Promise<any> {
      try {
        const response = await this.MascotasService.obtenerMascota(id);
        this.mascota=response.datos;
        return response.datos;
      }
  
      catch (error) {
        this.router.navigate(['/error']);
      }
  
    }
  

  
    public  eliminarMascota(id: number){
      this.MascotasService.eliminarMascota(id).then(async response => {
        if(response.message==='deleted'){
          this.mascota= await this.obtenerMascota(id);
          alert('Registro eliminado correctamente') 
        }
   
      }).catch((error) => {
        this.router.navigate(['/error']);
      })
    }


  
  }
  

  