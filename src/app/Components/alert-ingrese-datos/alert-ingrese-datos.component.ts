import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-ingrese-datos',
  templateUrl: './alert-ingrese-datos.component.html',
  styleUrls: ['./alert-ingrese-datos.component.css']
})
export class AlertIngreseDatosComponent {
  title= "Ingrese sus datos"

  username = document.getElementById('username')
  password = document.getElementById('password')
  button = document.getElementById('button')
}