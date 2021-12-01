import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaMascotasComponent } from './components/tabla-mascotas/tabla-mascotas.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FundacionesComponent } from './components/fundaciones/fundaciones.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { HttpClientModule } from '@angular/common/http';
import { MascotasService } from './services/mascotas/mascotas.service';
import { FundacionesService } from './services/fundaciones/fundaciones.service';
import { ErrorComponent } from './components/error/error.component';
import { FormularioMascotaComponent } from './components/formulario-mascota/formulario-mascota.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FichaMascotaComponent } from './components/ficha-mascota/ficha-mascota.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ActualizarMascotaComponent } from './components/actualizar-mascota/actualizar-mascota.component';
import { DataMascotaService } from './services/data-mascota/data-mascota.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaMascotasComponent,
    NotFoundComponent,
    FundacionesComponent,
    MascotasComponent,
    ErrorComponent,
    FormularioMascotaComponent,
    FichaMascotaComponent,
    NosotrosComponent,
    ActualizarMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [MascotasService, FundacionesService, DataMascotaService], 

  bootstrap: [AppComponent]
})
export class AppModule { }
