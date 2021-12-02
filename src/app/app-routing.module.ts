import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FundacionesComponent } from './components/fundaciones/fundaciones.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioMascotaComponent } from './components/formulario-mascota/formulario-mascota.component';
import { ActualizarMascotaComponent } from './components/actualizar-mascota/actualizar-mascota.component';



const routes: Routes = [
  {path: 'mascotas', component:MascotasComponent },
  {path: 'formularioMascota', component:FormularioMascotaComponent},
  {path: 'formularioEditarMascota/:id', component:ActualizarMascotaComponent},
  // {path:'**', redirectTo:'mascotas'} // redirecciona a otra ruta ya creada, el ** es cuando no encuentra la ruta
  {path:'fundaciones', component: FundacionesComponent},
  {path: 'error', component: ErrorComponent},
  {path: '', component:MascotasComponent },//landing page
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
