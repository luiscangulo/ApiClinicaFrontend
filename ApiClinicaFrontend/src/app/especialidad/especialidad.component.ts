import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EspecialidadService } from '../especialidad.service';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['nombreEspecialidad', 'Acciones']

  constructor(private service: EspecialidadService, 
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }

}
