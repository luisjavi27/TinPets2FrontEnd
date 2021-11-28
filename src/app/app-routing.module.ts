import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FundacionesComponent } from './components/fundaciones/fundaciones.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';



const routes: Routes = [
  {path: 'mascotas', component:MascotasComponent },
  // {path:'**', redirectTo:'mascotas'} // redirecciona a otra ruta ya creada, el ** es cuando no encuentra la ruta
  {path:'fundaciones', component: FundacionesComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
