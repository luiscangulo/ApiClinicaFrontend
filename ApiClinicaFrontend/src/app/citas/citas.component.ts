import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['fechaCita','horaCita', 'Acciones']

  constructor(private service: CitasService, 
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }

}
