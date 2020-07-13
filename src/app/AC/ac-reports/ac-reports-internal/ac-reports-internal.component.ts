import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reports } from '../../models/reports';
import { Router } from '@angular/router';
import { ReportsService } from '../../service/reports.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-ac-reports-internal',
  templateUrl: './ac-reports-internal.component.html',
  styleUrls: ['./ac-reports-internal.component.scss']
})
export class AcReportsInternalComponent implements OnInit {

  reports: Observable<Reports[]>;
  report: Observable<Reports[]>;
  // vReport: Observable<VisitReports[]>;
  dateend: Date;
  datestart: Date;
  dateend1: Date;
  datestart1: Date;
  submitted = false;

  startDateV: Date;
  endDateV: Date;

  tabVisitors: number = 1;
  tabPeople: number = 1;
  tabTenants:number = 1;

  // subscription:Subscription;

  data: any[];

  constructor(private ReportsService: ReportsService,
    private router: Router) {


  }

  ngOnInit(): void {
  }

  


  getReports() {
    this.ReportsService.getReports(this.datestart, this.dateend).subscribe(
      response => {
        this.reports = this.ReportsService.getReports(this.datestart, this.dateend);
        console.log(response);
        this.data = response;
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.datestart, this.dateend);
  }

  onSubmit() {
    this.submitted = true;
    this.getReports();
  }

  // onSubmit1() {
  //   this.submitted = true;
  //   this.getReportsPeople();
  // }
  // getReportsPeople() {
  //   this.ReportsService.getReportsPeople(this.datestart1, this.dateend1).subscribe(
  //     response => {
  //       this.report = this.ReportsService.getReportsPeople(this.datestart1, this.dateend1);
  //       console.log(response);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  // getReportsVisit() {
  //   this.ReportsService.getReportVisitors(this.startDateV, this.endDateV).subscribe(
  //     response => {
  //       this.vReport = this.ReportsService.getReportVisitors(this.startDateV, this.endDateV);
  //       console.log(response);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  // onSubmit2() {
  //   this.submitted = true;
  //   this.getReportsVisit();
  // }

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

  
    exportExcelTenants(): void 
    {   
      if(this.reports){ 
      let element = document.getElementById('tenants'); 
       console.log(element); 

       //let options:JSON2SheetOpts  = {header: ['Tag Codigo', 'Nombre Completo', 'Número de vivienda','Activo / Inactivo','Entrada','Salida']};
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element,{raw:true});

       ws['!cols'] = [
        {wpx: 150}, // "characters"
        {wpx: 150}, // "pixels"
        {wpx: 150},
        {wpx: 80},
        {wpx: 175},
        {wpx: 175}
        //{hidden: true} // hide column
      ];

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       //console.log(wb);
       //const wb: XLSX.WorkBook = { Sheets: {'data': ws}, SheetNames:['data']};
       XLSX.utils.book_append_sheet(wb, ws, 'Tags de Viviendas');

       /* save to file */
       XLSX.writeFile(wb, 'Tags_viviendas.xlsx',{type: "base64"});
      }else{
        console.log('Realice busqueda');
      }
			
    }

    // exportExcelPeople(): void 
    // {   
    //   if(this.report){ 
    //   let element = document.getElementById('people'); 
    //    //console.log(element); 

    //    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element,{raw:true});

    //    ws['!cols'] = [
    //     {wpx: 150}, // "characters"
    //     {wpx: 100}, // "pixels"
    //     {wpx: 175},
    //     {wpx: 150},
    //     {wpx: 150},
    //     {wpx: 90}
    //     //{hidden: true} // hide column
    //   ];

    //    /* generate workbook and add the worksheet */
    //    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    //    //console.log(wb);
    //    //const wb: XLSX.WorkBook = { Sheets: {'data': ws}, SheetNames:['data']};
    //    XLSX.utils.book_append_sheet(wb, ws, 'Personas Ingresadas');

    //    /* save to file */
    //    XLSX.writeFile(wb, 'Ingreso_personas.xlsx',{type: "base64"});
    //   }else{
    //     console.log('Realice busqueda');
    //   }
			
    // }

}
