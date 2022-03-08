import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HistorialService } from '../historial.service';

@Component({
  selector: 'app-crear-historial',
  templateUrl: './crear-historial.component.html',
  styleUrls: ['./crear-historial.component.css']
})
export class CrearHistorialComponent {

  constructor(private service: HistorialService, 
    private router: Router) { }

  historialForm = new FormGroup ({
    alergia: new FormControl('', Validators.required),
    enfermedad: new FormControl('', Validators.required),
    tratamiento: new FormControl('', Validators.required),
    medicacion: new FormControl('', Validators.required),
    prescripcion: new FormControl('', Validators.required)
    
  })

  onSubmit(){
    console.log(this.historialForm.value);

    this.service.crearHistorial(this.historialForm.value).subscribe((data:any) => {

      alert("Ficha creada");
      this.router.navigate(['']);
    })
  }

}
