import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import { Departments } from 'src/app/departments';
import { DepartmentsService } from 'src/app/departments.service';
import 'jspdf-autotable';





@Component({
  selector: 'app-departmentsr-list',
  templateUrl: './departmentsr-list.component.html',
  styleUrls: ['./departmentsr-list.component.scss']
})
export class DepartmentsRListComponent implements OnInit {
  departments: Observable<Departments[]>;
  department : Departments = new Departments();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
 




  constructor(private departmentService: DepartmentsService,
    private router: Router) { }
    filterPost = '';
    
    ngOnInit(): void {
    this.reloadData();
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

  getDepartmentR(){
    this.router.navigate(['departmentsr-list']);
  }

  imprimirLista(){
    const doc = new jsPDF('p', 'mm', 'a4');
    doc.fromHTML(document.getElementById('frmDepartment'),15,15);
    doc.text(10, 10, 'REPORTE DEPARTAMENTO');
   //doc.addPage();
    //doc.text(20, 20, 'Hello world!');
    doc.save('Lista de departamentos');

  }

  generate() { 
   /* var columns = [document.getElementById('head').innerText]
        let cell = [
            [{content: document.getElementById('content').innerText}]
        ];
       
        var doc = new jsPDF('p', 'mm', 'a4');
        doc.autoTable(columns, cell, { 
          willDrawCell: function (data) {
          var tdElement = cell.raw;
          if (tdElement.classList.contains('blank')) {
              cell.styles.fontStyle = 'bold';
              cell.styles.fontSize = '10';
          }
          });*/

        //doc.text("Departamentos", 10, 10);
        //doc.save('table.pdf');
    
    var doc = new jsPDF('l', 'pt');

    var res = doc.fromHTML(document.getElementById("frmDepartment"));
  //  doc.autoTable(res.columns, res.data, {margin: {top: 80}});

    var header = function(data) {
      doc.setFontSize(8);
      doc.setTextColor(40);
      doc.setFontStyle('normal');
      //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
    //doc.text("Testing Report", data.settings.margin.left, 50);
    };

    var options = {
      addPageContent  : header,

      margin: {
          top: 200,
                      bottom: 10,
                      left: 1,
                      right: 1,
      },
      startY: doc.autoTableEndPosY() + 20,
        styles: {overflow: 'linebreak'},

  createdCell: function (cell, opts) {
                      if (cell.text[0].indexOf('10000') > -1) { // count startrs from 0
                          // cell.raw contains the cell data
                          cell.styles.fillColor = [216, 78, 75];     // random color
                          cell.styles.textColor = [58, 121, 152];
                          cell.styles.fontStyle = 'bold';
                          cell.styles.fontSize = '10';
                      }
                  },

          tableWidth: 'auto',
    };

    doc.autoTable(res.columns, res.data, options);

    doc.save("table.pdf");
} 

  generatePdf(){

    /*const doc = new jsPDF()
    doc.autoTable({
      body: [
        [{ content: document.getElementById('frmDepartment').innerText, colSpan: 5, rowSpan: 5}],
      ],
    })
    doc.save('table.pdf')
    
*/  
          var pdf = new jsPDF('p', 'mm', 'a4');
          var res = pdf.fromHTML(document.getElementById('frmDepartment'),15,15);
          pdf.autoTable(res.columns, res.data, {
            startY: 60,
            tableWidth: 'auto',
            columnWidth: 'auto',
            styles: {
              overflow: 'linebreak',
              theme : 'Gridth'
            }
          });
          pdf.save("Departamentos")
          }

  /*generatePdf(){
    let chartHeder = document.getElementById('frmDepartment').innerText;
    var docDefinition = {
        content:  {
          table: {
           headerRows: 'auto',
           margin: [ 5, 2, 10, 20 ],
            widths: ["50%", "40%", "40%"],
            body: [
              [ { canvas: chartHeder, bold: true }]
            ]
          }
        }
        //[document.getElementById('frmDepartment').innerText]
    }
    pdfMake.createPdf(docDefinition).download('Departamentos');
  }*/

  exportTableToExcel() {
    var type = "xlsx"
    var elt = document.getElementById('frmDepartment');
    var wb = XLSX.utils.table_to_book(elt);
    return XLSX.writeFile(wb, undefined || ('Departamentos.' + (type || 'xlsx')));
 }
  ////////////////////////////////////


  convetToPDF(){
      var data = document.getElementById('frmDepartment');
      html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('new-file.pdf'); // Generated PDF
      });
      }

    }

