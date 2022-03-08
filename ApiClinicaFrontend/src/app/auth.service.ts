import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioInterface } from './interfaces/UsuarioInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'https://localhost:44352/api/Usuarios/';

  constructor(private http: HttpClient,
              private router: Router) { }

  register(usuario: UsuarioInterface){
    return this.http.post(this.baseUrl+'Register', usuario);

  }

  login(usuario: UsuarioInterface){
    return this.http.post(this.baseUrl+'Login', usuario);
  }

  logout(){
    localStorage.removeItem('userName'),
    localStorage.removeItem('token_value');
    this.router.navigate(['/pacientes']);
    window.location.reload();
  }

  get getUsername(){
    return localStorage.getItem('userName');
  }

  get isAutenticado(){
    return !!localStorage.getItem('token_value');
  }



}
