import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as jsPDF from 'jspdf';
import { Departments } from 'src/app/departments';
import { DepartmentsService } from 'src/app/departments.service';

@Component({
  selector: 'app-departmentsr-list',
  templateUrl: './departmentsr-list.component.html',
  styleUrls: ['./departmentsr-list.component.scss']
})
export class DepartmentsRListComponent implements OnInit {
  departments: Observable<Departments[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private departmentService: DepartmentsService,
    private router: Router) { }
filterPost = '';
  ngOnInit(): void {
    this.reloadData();
     // this.reloadData();
  }
  
  reloadData() {
    
    this.departmentService.getDepartmentR().subscribe(
      data => {
        this.departments = this.departmentService.getDepartmentR();
      },
      error => {
        console.log(error);   
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });

      
  }


  getAgreement(){
    this.router.navigate(['tagvivienda-list']);
  }



  imprimirLista(){
    const doc = new jsPDF
    doc.text(10, 10, 'REPORTE DEPARTAMENTO');
    doc.fromHTML(document.getElementById('frmDepartment'),20,20);
   //doc.addPage();
    //doc.text(20, 20, 'Hello world!');
    doc.save('Lista de departamentos');
  }


  query(ref,value:boolean){
  if (value)
  return ref.where('status','=',1);
  else
  return ref.where('status','=',1);
  }


}

