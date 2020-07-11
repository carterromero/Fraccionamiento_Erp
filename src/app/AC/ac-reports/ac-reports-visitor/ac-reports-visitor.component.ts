import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitReports } from '../../models/visit-reports';
import { ReportsService } from '../../service/reports.service';
//import * as XLSX from 'xlsx';

@Component({
  selector: 'app-ac-reports-visitor',
  templateUrl: './ac-reports-visitor.component.html',
  styleUrls: ['./ac-reports-visitor.component.scss']
})
export class AcReportsVisitorComponent implements OnInit {

  vReport: Observable<VisitReports[]>;
  startDateV: Date;
  endDateV: Date;
  submitted = false;
  tabVisitors: number = 1;

  constructor(private ReportsService: ReportsService) { }

  ngOnInit(): void {
  }

  getReportsVisit() {
    this.ReportsService.getReportVisitors(this.startDateV, this.endDateV).subscribe(
      response => {
        this.vReport = this.ReportsService.getReportVisitors(this.startDateV, this.endDateV);
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit2() {
    this.submitted = true;
    this.getReportsVisit();
  }

  // exportExcelVisitors(): void 
  //   {   
  //     if(this.vReport){ 
  //     let element = document.getElementById('visitors'); 
  //      //console.log(element); 

  //      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element,{raw:true});

  //      ws['!cols'] = [
  //       {wpx: 180}, // "characters"
  //       {wpx: 150}, // "pixels"
  //       {wpx: 150},
  //       {wpx: 150},
  //       {wpx: 80}
  //       //{hidden: true} // hide column
  //     ];

  //      /* generate workbook and add the worksheet */
  //      const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //      //console.log(wb);
  //      //const wb: XLSX.WorkBook = { Sheets: {'data': ws}, SheetNames:['data']};
  //      XLSX.utils.book_append_sheet(wb, ws, 'Visitantes');

  //      /* save to file */
  //      XLSX.writeFile(wb, 'Visitantes.xlsx',{type: "base64"});
  //     }else{
  //       console.log('Realice busqueda');
  //     }
			
  //   }
}
