import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reports } from '../../models/reports';
import { ReportsService } from '../../service/reports.service';
import * as XLSX from 'xlsx';
import * as jsPDF from 'jspdf'
@Component({
  selector: 'app-ac-reports-people',
  templateUrl: './ac-reports-people.component.html',
  styleUrls: ['./ac-reports-people.component.scss']
})
export class AcReportsPeopleComponent implements OnInit {

  report: Observable<Reports[]>;
  dateend1: Date;
  datestart1: Date;
  tipo: string;
  submitted = false;
  tabPeople: number = 1;
  constructor(private ReportsService: ReportsService) { }

  ngOnInit(): void {
  }

  onSubmit1() {
    this.submitted = true;
    this.getReportsPeople();
  }
  getReportsPeople() {
    if(this.tipo == 'Residentes' || this.tipo == 'All'){
      this.ReportsService.getReportsPeople(this.datestart1, this.dateend1,this.tipo).subscribe(
        response => {
          this.report = this.ReportsService.getReportsPeople(this.datestart1, this.dateend1,this.tipo);
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );  
    }
    else if(this.tipo == 'Visitantes'){
      this.ReportsService.getReportsPeopleV(this.datestart1, this.dateend1,this.tipo).subscribe(
        response => {
          this.report = this.ReportsService.getReportsPeopleV(this.datestart1, this.dateend1,this.tipo);
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    }
  }




  imprimirLista() : void{ 
    if(this.report){ 
      let element = document.getElementById('from-informacion'); 
       console.log(element); 
    }  

  
const doc = new jsPDF();
  
  doc.fromHTML(document.getElementById('from-informacion'), 10,10);;
  doc.save(['lista']);
  
  console.log();

  }

  exportExcelPeople(): void 
    {   
      if(this.report){ 
      let element = document.getElementById('people'); 
       //console.log(element); 

       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element,{raw:true});

       ws['!cols'] = [
        {wpx: 150}, // "characters"
        {wpx: 100}, // "pixels"
        {wpx: 175},
        {wpx: 150},
        {wpx: 150},
        {wpx: 90}
        //{hidden: true} // hide column
      ];

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       //console.log(wb);
       //const wb: XLSX.WorkBook = { Sheets: {'data': ws}, SheetNames:['data']};
       XLSX.utils.book_append_sheet(wb, ws, 'Personas Ingresadas');

       /* save to file */
       XLSX.writeFile(wb, 'Ingreso_personas.xlsx',{type: "base64"});
      }else{
        console.log('Realice busqueda');
      }
			
    }
}
