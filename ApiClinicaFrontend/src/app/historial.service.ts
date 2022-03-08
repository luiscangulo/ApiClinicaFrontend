import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HistorialInterface } from './interfaces/HistorialInterface';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  baseUrl: string = 'https://localhost:44352/api/Historials/';

  constructor(private http: HttpClient) { }

  GetHistorial(idhistorial: number){
    return this.http.get(this.baseUrl+idhistorial);

  }

  actualizarHistorial(idhistorial:number, historial: HistorialInterface)
  {
    return this.http.put(this.baseUrl+idhistorial, historial);
  }

  crearHistorial(historial: HistorialInterface){
    return this.http.post(this.baseUrl, historial);
  }

  deleteHistorial(idhistorial:number){
    return this.http.delete(this.baseUrl+idhistorial);
  }
}
