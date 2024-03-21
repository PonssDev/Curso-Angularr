import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hico-c',
  templateUrl: './empleado-hico-c.component.html',
  styleUrls: ['./empleado-hico-c.component.css']
})
export class EmpleadoHicoCComponent {

  @Input() empleadoDeLista:Empleado
  @Input() indice:number

  arrayCaracteristicas = [''];



  agregaCaracteristica(caracteristica: string) {
    this.arrayCaracteristicas.push(caracteristica);

  }

}
