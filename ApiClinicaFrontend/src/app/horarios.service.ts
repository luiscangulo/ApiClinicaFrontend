import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HorariosInterface } from './interfaces/HorariosInterface';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  baseUrl: string = 'https://localhost:44352/api/Horarios/';

  constructor(private http: HttpClient) { }

  getHorarios(){
    return this.http.get(this.baseUrl);
  }
  
  GetHorario(idhorario: number){
    return this.http.get(this.baseUrl+idhorario);
  
  }
}
