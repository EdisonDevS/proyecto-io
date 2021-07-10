import { Component, OnInit } from '@angular/core';

import * as yasmij from 'yasmij';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  funcionObjetivo: string;

  restriccion: string;
  restricciones: string[] = [];

  min: string;
  max: string;

  resultado: any;

  constructor(
  ) { }

  ngOnInit() {
  }

  agregarRestriccion() {
    this.restricciones.push(this.restriccion);
  }

  calcular() {
    const input = {
      type: 'minimize',
      objective : this.funcionObjetivo,
      constraints : this.restricciones
    };

    this.resultado = yasmij.solve( input );
    console.log(this.resultado);
  }

}
