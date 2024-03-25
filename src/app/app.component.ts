import { Component } from '@angular/core';
import { DataServices } from './data.services';
import { Observable, map } from 'rxjs';
import { InfoApi } from './info-api';
import { InfoApi2 } from './info-api2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Usando una sola linea
  // Creamos una interface tipo infoApi para no poner el any.
  apiContent: Observable<InfoApi> = this.dataService.getApi().pipe(map((datos: InfoApi) => datos))
  apiContent2: Observable<InfoApi2> = this.dataService.getApi2().pipe(map((datos: InfoApi2) => datos))
  constructor(private dataService: DataServices) { }

}
