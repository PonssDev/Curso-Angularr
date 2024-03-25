import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { Observable } from "rxjs";
import { InfoApi } from "./info-api";
import { InfoApi2 } from "./info-api2";

@Injectable()
export class DataServices {

  apiUrl = "https://jsonplaceholder.typicode.com/todos/1"
  apiUrl2 = "https://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient: HttpClient) {


  }

  guardarEmpleados(empleados: Empleado[]) {
    this.httpClient.post('https://clientes-b634f-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(
      response => console.log("Se han guardado los empleados" + response),
      error => console.log("Error " + error)
    )
  }

  getApi(): Observable<InfoApi> {
    return this.httpClient.get<InfoApi>(this.apiUrl)
  }

  getApi2(): Observable<InfoApi2> {
    return this.httpClient.get<InfoApi2>(this.apiUrl2)
  }




}
