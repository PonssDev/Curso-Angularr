import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {

  @Output() caracteristicasEmpleados = new EventEmitter<string>()

  //constructor(private miServidio: ServicioEmpleadosService){}

  agregaCaracteristicas(value:string){
    //this.miServidio.muestraMensaje("Caracteristica '" + value + "' añadida correctamente")
    this.caracteristicasEmpleados.emit(value)
  }

}
