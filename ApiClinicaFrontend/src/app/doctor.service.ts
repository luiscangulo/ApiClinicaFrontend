import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DoctorInterface } from './interfaces/DoctorInterface';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl: string = 'https://localhost:44352/api/Doctors/';

  constructor(private http: HttpClient) { }

getDoctors(){
  return this.http.get(this.baseUrl);

}

GetDoctor(iddoctor: number){
  return this.http.get(this.baseUrl+iddoctor);

}


}
