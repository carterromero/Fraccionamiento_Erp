import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as jsPDF from 'jspdf';
import { Agreements } from 'src/app/agreements';
import { AgreementService } from 'src/app/agreements.service';

@Component({
  selector: 'tagvivienda-list',
  templateUrl: './tagvivienda-list.component.html',
  styleUrls: ['./tagvivienda-list.component.scss']
})
export class TagviviendaListComponent implements OnInit {
  agreements: Observable<Agreements[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private agreementService: AgreementService,
    private router: Router) { }
filterPost = '';
  ngOnInit(): void {
    this.reloadData();
     // this.reloadData();
  }
  
  reloadData() {
    
    this.agreementService.getAgreementRep().subscribe(
      data => {
        this.agreements = this.agreementService.getAgreementRep();
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


  getAgreement(date: string){
    this.router.navigate(['tagvivienda-list', date]);
  }



  imprimirLista(){
    const doc = new jsPDF
    doc.text(10, 10, 'REPORTE VIVIENDAS INTERNAS ');
    doc.fromHTML(document.getElementById('frmViviendas'),20,20);
   //doc.addPage();
    //doc.text(20, 20, 'Hello world!');
    doc.save('Lista de viviendas');
  }


  query(ref,value:boolean){
  if (value)
  return ref.where('status','=',1);
  else
  return ref.where('status','=',1);
  }


}

