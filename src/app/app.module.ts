import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { EducacionHabilidadesComponent } from './Components/educacion-habilidades/educacion-habilidades.component';
import { ContactoComponent } from './Components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProyectosComponent,
    EducacionHabilidadesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
