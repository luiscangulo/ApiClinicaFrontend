import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-delete-paciente',
  templateUrl: './delete-paciente.component.html',
  styleUrls: ['./delete-paciente.component.css']
})
export class DeletePacienteComponent implements OnInit {

  id: any;

  paciente = {
    nombres:'',
    apellidoPaterno:'',
    apellidoMaterno:'',
    edad:'',
    ci:'',
    celular:'',
    telefono:'',
    email:'',
    direccion:''
  }

  constructor(private service:PacienteService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getPaciente(this.id).subscribe((data: any) => {
      console.log(data);
      this.paciente.nombres = data.result.nombres;
      this.paciente.apellidoPaterno = data.result.apellidoPaterno;
      this.paciente.apellidoMaterno = data.result.apellidoMaterno;
      this.paciente.edad = data.result.edad;
      this.paciente.ci = data.result.ci;
      this.paciente.celular = data.result.celular;
      this.paciente.telefono = data.result.telefono;
      this.paciente.email = data.result.email;
      this.paciente.direccion = data.result.direccion;
    })

  }

  cancel(){
    this.router.navigate(['/']);
  }

  confirmar(){
    this.service.deletePaciente(this.id).subscribe((data: any)=> {
      this.router.navigate(['/']);
    })
  }

}
