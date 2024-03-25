import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { Observable, catchError, combineLatest, forkJoin, map } from "rxjs";
// import { InfoApi } from "./info-api";
import { User, UserFork, UserPlus } from "./info-apis"
import { InfoApi2 } from "./info-api2";
import { InfoApi } from "./info-api";

@Injectable()
export class DataServices {

  apiUrl = "https://jsonplaceholder.typicode.com/todos/1"
  apiUrl2 = "https://jsonplaceholder.typicode.com/todos"

  apiUrlNueva1 = "https://jsonplaceholder.typicode.com/todos/1"
  apiUrlNueva2 = "https://jsonplaceholder.typicode.com/users/1"

  constructor(private httpClient: HttpClient) { }

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


  // Combina dos observables
  public peticionApi1(): Observable<User> {
    return this.httpClient.get<User>('https://jsonplaceholder.typicode.com/todos/1')
  }

  public peticionApi2(): Observable<UserPlus> {
    return this.httpClient.get<UserPlus>('https://jsonplaceholder.typicode.com/users/1')
  }

  public mergeObservables(): Observable<UserFork> {
    return forkJoin({
      api_1: this.peticionApi1(),
      api_2: this.peticionApi2(),
    })
  }
}
