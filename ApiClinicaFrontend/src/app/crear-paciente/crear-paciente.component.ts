import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent {

  constructor(private service: PacienteService, 
              private router: Router) { }

  pacienteForm = new FormGroup ({
    nombres: new FormControl('', Validators.required),
    apellidoPaterno: new FormControl('', Validators.required),
    apellidoMaterno: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    ci: new FormControl('', Validators.required),
    celular: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required)
    
  })

  onSubmit(){
    console.log(this.pacienteForm.value);

    this.service.crearPaciente(this.pacienteForm.value).subscribe((data:any) => {

      alert("Paciente Creado");
      this.router.navigate(['/pacientes']);
    })
  }

}
