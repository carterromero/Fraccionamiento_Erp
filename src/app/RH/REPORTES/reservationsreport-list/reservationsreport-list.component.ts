import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as jsPDF from 'jspdf';
import { Reservations } from 'src/app/reservations';
import { ReservationsService } from 'src/app/reservations.service';


@Component({
  selector: 'app-reservationsreport-list',
  templateUrl: './reservationsreport-list.component.html',
  styleUrls: ['./reservationsreport-list.component.scss']
})
export class ReservationsreportListComponent implements OnInit {
  reservations: Observable<Reservations[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private reservationService: ReservationsService,
    private router: Router) { }
filterPost = '';
  ngOnInit(): void {
    this.reloadData();
     // this.reloadData();
  }
  
  reloadData() {
    
    this.reservationService.getReservationReport().subscribe(
      data => {
        this.reservations = this.reservationService.getReservationReport();
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
    this.router.navigate(['reservationsreport-list', date]);
  }


   generate() {
    const doc = new jsPDF('p', 'pt');
    const res = doc.autoTableHtmlToJson(document.getElementById("frmReservations"));
    doc.autoTable(res.columns, res.data, {margin: {top: 80}});
  
    const header = function(data) {
      doc.setFontSize(18);
      doc.setTextColor(40);
      doc.setFontStyle('normal');
      //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
      doc.text("Testing Report", data.settings.margin.left, 50);
    };
  
    const options = {
      beforePageContent: header,
      margin: {
        top: 80
      },
      startY: doc.autoTableEndPosY() + 20
    };
  
    doc.autoTable(res.columns, res.data, options);
  
    doc.save("table.pdf");
  }

  imprimirLista(){
    const doc = new jsPDF('p','mm','letter');
    doc.setFontSize(10);
    doc.setTextColor(0,85,136);
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.text(15, 15, 'REPORTE RESERVACIONES');
    doc.fromHTML(document.getElementById('frmReservations'),15,15);
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


