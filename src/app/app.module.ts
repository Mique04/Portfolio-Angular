import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { AlertIngreseDatosComponent } from './Components/alert-ingrese-datos/alert-ingrese-datos.component';
import { FormsModule } from '@angular/forms';
import { HabilidadesComponent } from './Components/habilidades/habilidades.component';
import { EducacionComponent } from './Components/educacion/educacion.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { CarouselComponent } from './Components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProyectosComponent,
    ContactoComponent,
    AlertIngreseDatosComponent,
    HabilidadesComponent,
    EducacionComponent,
    NavBarComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
