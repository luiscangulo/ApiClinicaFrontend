import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HorariosService } from '../horarios.service';
import { HorariosInterface } from '../interfaces/HorariosInterface';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['dias','horaIngreso','horaSalida']

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: HorariosService, 
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.service.getHorarios().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource<HorariosInterface>(data.result as HorariosInterface[]);
      this.dataSource.paginator = this.paginator;
      console.log(data);      
  });
  }

}
