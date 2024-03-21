import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHicoCComponent } from './empleado-hico-c/empleado-hico-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes=[
  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'quienes', component:QuienesComponent},
  {path:'contacto', component:ContactoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHicoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponent,
    QuienesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
