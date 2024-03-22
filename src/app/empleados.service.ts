import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService){}

  empleados: Empleado[] = [
    new Empleado('Juan', 'Días', 'Presidente', 7500),
    new Empleado('Ana', 'martín', 'Directora', 5500),
    new Empleado('María', 'Fdez', 'Jefa seccion', 3500),
    new Empleado('Laura', 'López', 'Administrativo', 2500),
  ];

  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" +
    empleado.nombre + "\n" + "Salario: " + empleado.nombre)
    this.empleados.push(empleado)
  }

  encontrarEmpleado(indice:number){
    let empleado: Empleado = this.empleados[indice]

    return empleado
  }

  actualizarEmpleado(indice: number, empleado:Empleado){
    let empleadoModificado = this.empleados[indice]

    empleadoModificado.nombre = empleado.nombre
    empleadoModificado.apellido = empleado.apellido
    empleadoModificado.cargo = empleado.cargo
    empleadoModificado.salario = empleado.salario

  }

}
