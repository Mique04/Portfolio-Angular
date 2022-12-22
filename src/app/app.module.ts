import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { EducacionHabilidadesComponent } from './Components/educacion-habilidades/educacion-habilidades.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { AlertIngreseDatosComponent } from './Components/alert-ingrese-datos/alert-ingrese-datos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProyectosComponent,
    EducacionHabilidadesComponent,
    ContactoComponent,
    AlertIngreseDatosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
