import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.css']
})
export class ActualizarPacienteComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<ActualizarPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {nombres:string, apellidoPaterno:string, apellidoMaterno:string,
          edad:string, ci:string, celular:string, telefono:string, email:string, direccion:string, id:number}
          , private service: PacienteService, 
          private router: Router) {
            this.id = data.id;
            this.form = fb.group({
              nombres: [data.nombres, Validators.required],
              apellidoPaterno : [data.apellidoPaterno, Validators.required],
              apellidoMaterno : [data.apellidoMaterno, Validators.required],
              edad : [data.edad, Validators.required],
              ci : [data.ci, Validators.required],
              celular : [data.celular, Validators.required],
              telefono : [data.telefono, Validators.required],
              email : [data.email, Validators.required],
              direccion : [data.direccion, Validators.required]
            })
           }
           cerrar(){
             this.dialogRef.close();

           }
           guardar(){
             this.form.value.id = this.id;
             this.service.actualizarPaciente(this.id, this.form.value).subscribe((data)=> {
               this.router.navigate(['/pacientes']);
               window.location.reload();
             });
             this.dialogRef.close();

           }

  ngOnInit(): void {
  }

}
