import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MascotasService } from '../../services/mascotas/mascotas.service';
import { DataMascotaService } from '../../services/data-mascota/data-mascota.service';


@Component({
  selector: 'app-actualizar-mascota',
  templateUrl: './actualizar-mascota.component.html',
  styleUrls: ['./actualizar-mascota.component.css']
})
export class ActualizarMascotaComponent implements OnInit {

  public formActMascota: FormGroup = new FormGroup({});
 
  public mascota: any={};

     
  constructor(private formBuilder: FormBuilder, public MascotasService: MascotasService, private router: Router, public dataMascotaService:DataMascotaService, private route:ActivatedRoute) { }
  
  

    async ngOnInit(): Promise<void> {
      console.log(this.route.snapshot)
      const id=this.route.snapshot.params['id'];
      this.mascota= await this.obtenerMascota(id);
      console.log("data mascota ",this.mascota)
      this.buildForm();
    }

    private buildForm(){
      this.formActMascota = this.formBuilder.group({
        nombre:[this.mascota.nombre, Validators.required],
        edad: [this.mascota.edad, Validators.required],
        especie: [this.mascota.especie, Validators.required],
        fundacion: [this.mascota.fundacion, Validators.required],
        especieselect:[""],
        especial: ['']
      })
    }

 
    public actualizarMascota(){ 
       
      console.log("data: ",this.dataMascotaService.info, "formulario: ",this.formActMascota.value)
      this.MascotasService.actualizarMascota(this.formActMascota.value, this.dataMascotaService.info).then(response => {
        alert("Mascota actualizada correctamente");
        console.log(this.formActMascota.value);
        this.router.navigate(['/mascotas']);
      }).catch(error => {
        this.router.navigate(['/error']);
      })
    }

    public async  obtenerMascota(id: number): Promise<any> {
      try {
        const response = await this.MascotasService.obtenerMascota(id);
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
  

  