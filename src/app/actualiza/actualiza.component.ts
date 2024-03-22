import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent {
  constructor(private router:Router, private empleadosService: EmpleadosService, private route:ActivatedRoute){
    this.empleados = this.empleadosService.empleados

    this.indice = this.route.snapshot.params['id']

    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice)

    this.cuadroNombre = empleado.nombre
    this.cuadroApellido = empleado.apellido
    this.cuadroCargo = empleado.cargo
    this.cuadroSalario = empleado.salario
  }

  volverHome(){
    this.router.navigate([''])
  }

  empleados:Empleado[]=[]

  actualizaEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)
    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado)
    this.router.navigate([''])

  }

  eliminaEmpleado(){
    this.empleadosService.eliminarEmpleado(this.indice)
    this.router.navigate([''])

  }

  cuadroNombre:string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  indice:number;
}
