import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

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
