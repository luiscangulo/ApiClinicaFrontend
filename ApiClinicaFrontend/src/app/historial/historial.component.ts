import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HistorialService } from '../historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['alergia','enfermedad','tratamiento','medicacion','prescripcion']

  constructor(private service: HistorialService, 
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }

}
