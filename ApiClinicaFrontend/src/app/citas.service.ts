import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CitaInterface } from './interfaces/CitaInterface';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  baseUrl: string = 'https://localhost:44352/api/Citas/';

  constructor(private http: HttpClient) { }

  GetCita(idcita: number){
    return this.http.get(this.baseUrl+idcita);

  }

  actualizarCita(idcita:number, cita: CitaInterface)
  {
    return this.http.put(this.baseUrl+idcita, cita);

  }

  crearCita(cita: CitaInterface){
    return this.http.post(this.baseUrl, cita);
  }

  deleteCita(idcita:number){
    return this.http.delete(this.baseUrl+idcita);
  }

}
