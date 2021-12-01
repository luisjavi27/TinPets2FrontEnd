import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MascotasService } from '../../services/mascotas/mascotas.service';

@Component({
  selector: 'app-formulario-mascota',
  templateUrl: './formulario-mascota.component.html',
  styleUrls: ['./formulario-mascota.component.css']
})
export class FormularioMascotaComponent implements OnInit {

  

  public formMascota: FormGroup = new FormGroup({});
 

  constructor(private formBuilder: FormBuilder, private mascotasService: MascotasService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.buildForm();
  }

 

  private buildForm(){
    this.formMascota = this.formBuilder.group({
      nombre:['', Validators.required],
      edad: ['', Validators.required],
      especie: ['', Validators.required],
      fundacion: ['', Validators.required],
      especial: [''],
    })
  }

  public agregarMascota(){
    this.mascotasService.agregarMascota(this.formMascota.value).then(response => {
      alert("Mascota creada correctamente");
      this.router.navigate(['/mascotas']);
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }
}
