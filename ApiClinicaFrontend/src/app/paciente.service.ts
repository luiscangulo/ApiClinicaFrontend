import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PacienteInterface } from './interfaces/PacienteInterface';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  baseUrl: string = 'https://localhost:44352/api/Pacientes/';

  constructor(private http: HttpClient) { }

getPacientes(){

  let auth_token = localStorage.getItem('token_value');
  const headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  })

  return this.http.get(this.baseUrl, { headers: headers});

}

getPaciente(id: number){
  let auth_token = localStorage.getItem('token_value');
  const headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  })
  return this.http.get(this.baseUrl+id, { headers: headers});
}

crearPaciente(paciente: PacienteInterface){
  let auth_token = localStorage.getItem('token_value');
  const headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  })
  return this.http.post(this.baseUrl, paciente, { headers: headers});
}

actualizarPaciente(id:number, paciente: PacienteInterface){
  let auth_token = localStorage.getItem('token_value');
  const headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  })
  return this.http.put(this.baseUrl+id, paciente, { headers: headers} );
}

deletePaciente(id:number){
  let auth_token = localStorage.getItem('token_value');
  const headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  })
  return this.http.delete(this.baseUrl+id, { headers: headers});
}


}
