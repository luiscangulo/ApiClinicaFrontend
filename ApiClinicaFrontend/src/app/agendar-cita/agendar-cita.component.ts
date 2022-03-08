import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent {

  constructor(private service: CitasService, 
    private router: Router) { }

    citaForm = new FormGroup ({
      fechaCita: new FormControl('', Validators.required),
      horaCita: new FormControl('', Validators.required)
      
    })

    onSubmit(){
      console.log(this.citaForm.value);
  
      this.service.crearCita(this.citaForm.value).subscribe((data:any) => {
  
        alert("Cita Creada");
        this.router.navigate(['']);
      })
    }

 
}
