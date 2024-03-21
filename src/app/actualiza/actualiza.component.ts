import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent {
  constructor(private router:Router, private empleadosService: EmpleadosService){
    this.empleados = this.empleadosService.empleados
  }

  volverHome(){
    this.router.navigate([''])
  }

  empleados:Empleado[]=[]

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)
    this.empleadosService.agregarEmpleadoServicio(miEmpleado)
    this.router.navigate([''])

  }

  cuadroNombre:string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
}
