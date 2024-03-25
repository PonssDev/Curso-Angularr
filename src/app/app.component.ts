import { Component } from '@angular/core';
import { DataServices } from './data.services';
import { Observable, map } from 'rxjs';
import { infoApi } from './info-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Usando una sola linea
  // Creamos una interface tipo infoApi para no poner el any.
  apiContent: Observable<infoApi> = this.dataService.getApi().pipe(map((datos: infoApi) => datos))
  constructor(private dataService: DataServices) { }

}
