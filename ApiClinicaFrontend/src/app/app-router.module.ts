
import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActualizarCitaComponent } from "./actualizar-cita/actualizar-cita.component";
import { ActualizarHistorialComponent } from "./actualizar-historial/actualizar-historial.component";
import { AgendarCitaComponent } from "./agendar-cita/agendar-cita.component";
import { CitasComponent } from "./citas/citas.component";
import { CrearHistorialComponent } from "./crear-historial/crear-historial.component";
import { CrearPacienteComponent } from "./crear-paciente/crear-paciente.component";
import { DeleteCitaComponent } from "./delete-cita/delete-cita.component";
import { DeleteHistorialComponent } from "./delete-historial/delete-historial.component";
import { DeletePacienteComponent } from "./delete-paciente/delete-paciente.component";
import { DoctorComponent } from "./doctor/doctor.component";
import { EspecialidadComponent } from "./especialidad/especialidad.component";
import { HistorialComponent } from "./historial/historial.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { HorariosComponent } from "./horarios/horarios.component";
import { LoginComponent } from "./login/login.component";
import { PacientesComponent } from "./pacientes/pacientes.component";
import { RegisterComponent } from "./register/register.component";




// route
const routes: Routes = [
    {path: '', component: PacientesComponent},
    {path:'pacientes', component: PacientesComponent},
    {path:'crear-paciente', component: CrearPacienteComponent},
    {path:'delete-paciente/:id', component: DeletePacienteComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'citas', component: CitasComponent},
    {path:'doctor', component: DoctorComponent},
    {path:'especialidad', component: EspecialidadComponent},
    {path:'historial', component: HistorialComponent},
    {path:'horarios', component: HorariosComponent},
    {path:'homepage', component: HomepageComponent},
    {path:'agendar-cita', component: AgendarCitaComponent},
    {path:'crear-historial', component: CrearHistorialComponent},
    {path:'actualizar-cita', component: ActualizarCitaComponent},
    {path:'delete-cita', component: DeleteCitaComponent},
    {path:'delete-historial', component: DeleteHistorialComponent},
    {path:'actualizar-historial', component: ActualizarHistorialComponent}


]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}
