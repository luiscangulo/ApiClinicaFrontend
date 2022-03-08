import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ActualizarPacienteComponent } from '../actualizar-paciente/actualizar-paciente.component';
import { PacienteInterface } from '../interfaces/PacienteInterface';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['nombres','apellidoPaterno','apellidoMaterno','edad',
  'ci','celular','telefono','email','direccion', 'Acciones']

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: PacienteService, 
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {

    this.service.getPacientes().subscribe((data:any) => {
        this.dataSource = new MatTableDataSource<PacienteInterface>(data.result as PacienteInterface[]);
        this.dataSource.paginator = this.paginator;
        console.log(data);      
    },
    (errorData) => this.router.navigate(['/login']));
  }

 aplicarFiltro(filtro: any){
    this.dataSource.filter = filtro.target.value.trim().toLowerCase();
 } 

  actualizarPaciente(paciente: PacienteInterface){
    console.log(paciente);
    
    this.dialog.open(ActualizarPacienteComponent, {
      data:{
        nombres: paciente.nombres,
        apellidoPaterno: paciente.apellidoPaterno,
        apellidoMaterno: paciente.apellidoMaterno,
        edad: paciente.edad,
        ci: paciente.ci,
        celular: paciente.celular,
        telefono: paciente.telefono,
        email: paciente.email,
        direccion: paciente.direccion,
        id: paciente.id,
        /*Usuario_idUsuario: paciente.Usuario_idUsuario*/

      }
    })
  }

}
