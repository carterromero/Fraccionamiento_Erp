import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as jsPDF from 'jspdf';
//servicios
import { TranslService } from "../../../../services/gl/transl.service";
import { Transl } from "../../../../services/gl/transl";
//busqueda
import { Trans } from "../../../../services/gl/trans";



import { BusquedaQ } from 'src/app/busqueda';

@Component({
  selector: 'app-transl-list',
  templateUrl: './transl-list.component.html',
  styleUrls: ['./transl-list.component.scss']
})
export class TranslListComponent implements OnInit {

  busqueda = new Trans();
  general: Observable<Transl[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  p_condominio_id: number;
  p_periodo_id : number;
  employee: Transl;  

  constructor(private generalService: TranslService,
    private router: Router) { }
filterPost = '';
  ngOnInit(): void {
    
     // this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployee(this.busqueda.p_condominio_id,this.busqueda.p_periodo_id).subscribe(
      data => {
        console.log(this.p_condominio_id,this.p_periodo_id);
        this.general = this.generalService.getEmployee(this.busqueda.p_condominio_id,this.busqueda.p_periodo_id);
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


}
 

