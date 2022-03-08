import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EspecialidadInterface } from './interfaces/EspecialidadInterface';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  baseUrl: string = 'https://localhost:44352/api/Especialidads/';

  constructor(private http: HttpClient) { }

  GetEspecialidad(idespecialidad: number){
    return this.http.get(this.baseUrl+idespecialidad);

  }

}
