import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-ingrese-datos',
  templateUrl: './alert-ingrese-datos.component.html',
  styleUrls: ['./alert-ingrese-datos.component.css']
})
export class AlertIngreseDatosComponent {
  title= "Ingrese sus datos"
  mensaje= ""
  Registro= false
  nombre:string=""

  RegistroExitoso() {
    this.Registro=true
    this.mensaje= "te has registrado con exito"
  }
  sinRegistrar() {
    this.mensaje= "Ha ocurrido un error, vuelve a intentarlo"
  }
}