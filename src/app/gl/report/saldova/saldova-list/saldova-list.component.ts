import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

//servicios
import { ConsolService } from "../../../../services/gl/consol.service";
import { Saldova } from "../../../../services/gl/saldova";
//busqueda
import { Trans } from "../../../../services/gl/trans";


@Component({
  selector: 'app-saldova-list',
  templateUrl: './saldova-list.component.html',
  styleUrls: ['./saldova-list.component.scss']
})
export class SaldovaListComponent implements OnInit {


  busqueda = new Trans();
  general: Observable<Saldova[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  p_condominio_id: number;
  p_periodo_id : number;
  employee: Saldova;  

  constructor(private generalService: ConsolService,
    private router: Router) { }
filterPost = '';
  ngOnInit(): void {
    
     // this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployeesa(this.busqueda.p_condominio_id,this.busqueda.p_periodo_id).subscribe(
      data => {
        console.log(this.p_condominio_id,this.p_periodo_id);
        this.general = this.generalService.getEmployeesa(this.busqueda.p_condominio_id,this.busqueda.p_periodo_id);
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

  

  getEmployee(date: string){
    this.router.navigate(['repo-cred-pay-cont-list', date]);
  }

  getsbusqueda()
  
  {
    
    if( this.busqueda.p_condominio_id !=null ){
    this.reloadData();
  }
 else if( this.busqueda.p_periodo_id !=null ){
    this.reloadData();
  }

  else{
    alert("datos invalidos para buscar intente con otros");
  }
   
  }


  updateGeneral(id: number){
    this.router.navigate(['update-payment-record', id]);
  }

  imprimirLista(){
    const doc = new jsPDF
    doc.text(10, 10, 'REPORTE CONTABLE ');
    doc.fromHTML(document.getElementById('frmEquipos'),30,10);
   //doc.addPage();
    //doc.text(20, 20, 'Hello world!');
    doc.save('Reporte contable');


  }


  query(ref,value:boolean){
  if (value)
  return ref.where('status','=',1);
  else
  return ref.where('status','=',1);
  }
  exportTableToExcel() {
    var type = "xlsx"
    var elt = document.getElementById('frmEquipos');
    var wb = XLSX.utils.table_to_book(elt);
    return XLSX.writeFile(wb, undefined || ('REPORTESALDOBALANZA.' + (type || 'xlsx')));
  }


}