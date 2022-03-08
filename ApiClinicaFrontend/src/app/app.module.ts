import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PacienteService } from './paciente.service';
import { AuthService } from './auth.service';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { DeletePacienteComponent } from './delete-paciente/delete-paciente.component';
import { MatListModule } from '@angular/material/list';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { CitasComponent } from './citas/citas.component';
import { HistorialComponent } from './historial/historial.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { HorariosComponent } from './horarios/horarios.component';
import { CitasService } from './citas.service';
import { DoctorService } from './doctor.service';
import { EspecialidadService } from './especialidad.service';
import { HistorialService } from './historial.service';
import { HorariosService } from './horarios.service';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageService } from './homepage.service';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { CrearHistorialComponent } from './crear-historial/crear-historial.component';
import { ActualizarCitaComponent } from './actualizar-cita/actualizar-cita.component';
import { DeleteCitaComponent } from './delete-cita/delete-cita.component';
import { DeleteHistorialComponent } from './delete-historial/delete-historial.component';
import { ActualizarHistorialComponent } from './actualizar-historial/actualizar-historial.component';


@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    HeaderComponent,
    FooterComponent,
    CrearPacienteComponent,
    ActualizarPacienteComponent,
    DeletePacienteComponent,
    RegisterComponent,
    LoginComponent,
    CitasComponent,
    HistorialComponent,
    DoctorComponent,
    EspecialidadComponent,
    HorariosComponent,
    HomepageComponent,
    AgendarCitaComponent,
    CrearHistorialComponent,
    ActualizarCitaComponent,
    DeleteCitaComponent,
    DeleteHistorialComponent,
    ActualizarHistorialComponent
  ],
  imports: [
    BrowserModule, AppRouterModule, HttpClientModule, BrowserAnimationsModule, MatButtonModule, MatTableModule, 
    ReactiveFormsModule, MatInputModule, MatCardModule, MatToolbarModule, MatDialogModule, MatListModule, FormsModule,
    MatPaginatorModule, MatSortModule, MatIconModule
  ],
  entryComponents : [ActualizarPacienteComponent],
  providers: [ PacienteService, AuthService, CitasService, DoctorService, EspecialidadService, HistorialService, HorariosService, HomepageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
