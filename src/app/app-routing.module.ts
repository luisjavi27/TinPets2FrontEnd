import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TablaMascotasComponent } from './components/tabla-mascotas/tabla-mascotas.component';

const routes: Routes = [
  {path: 'mascotas', component: TablaMascotasComponent},
  // {path:'**', redirectTo:'mascotas'} // redirecciona a otra ruta ya creada, el ** es cuando no encuentra la ruta
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
