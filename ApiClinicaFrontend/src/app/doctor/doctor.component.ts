import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { DoctorInterface } from '../interfaces/DoctorInterface';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['ciDoctor','nombreDoctor','apellidosDoctor','celularDoctor']

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: DoctorService, 
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {

    this.service.getDoctors().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource<DoctorInterface>(data.result as DoctorInterface[]);
        this.dataSource.paginator = this.paginator;
      console.log(data);      
  });

  }

}
