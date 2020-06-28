import { Component, OnInit, Query } from '@angular/core';

import { Router } from '@angular/router';
import { RepoCredPay } from 'src/app/repo-cred-pay';
import { RepoCredPayService } from 'src/app/repo-cred-pay.service';
import { Observable } from 'rxjs';
import * as jsPDF from 'jspdf'
import { query } from '@angular/animations';
import { BusquedaQ } from 'src/app/busqueda';

@Component({
  selector: 'app-repo-cred-pay-list',
  templateUrl: './repo-cred-pay-list.component.html',
  styleUrls: ['./repo-cred-pay-list.component.scss']
})
export class RepoCredPayListComponent implements OnInit {
  busqueda = new BusquedaQ();
  general: Observable<RepoCredPay[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  date: string;
  employee: RepoCredPay;  

  constructor(private generalService: RepoCredPayService,
    private router: Router) { }
filterPost = '';
  ngOnInit(): void {
    
     // this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployee(this.busqueda.filters).subscribe(
      data => {
        console.log(this.date);
        this.general = this.generalService.getEmployeeList();
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

  deleteGeneral(id: number) {
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages =" se a eliminado correctamente";
        },
        error => {console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
        }
      );
  }

  getEmployee(date: string){
    this.router.navigate(['repo-cred-pay-cont-list', date]);
  }

  getsbusqueda()
  {
    if(this.busqueda.filters !=null){
    this.reloadData();
  }
  else{
    alert("Ingrese Fecha para buscar");
  }
   
  }


  updateGeneral(id: number){
    this.router.navigate(['update-payment-record', id]);
  }

  imprimirLista(){
    const doc = new jsPDF
    doc.text(20, 20, 'REPORTE CONTABLE ');
    doc.fromHTML(document.getElementById('frmEquipos'),10,10);
   //doc.addPage();
    //doc.text(20, 20, 'Hello world!');
    doc.save('Lista de Equipos');
  }


  query(ref,value:boolean){
  if (value)
  return ref.where('status','=',1);
  else
  return ref.where('status','=',1);
  }


}

