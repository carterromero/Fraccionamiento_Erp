import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
    doc.fromHTML(document.getElementById('frmDepartment'),20,20);
    html2canvas(doc).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
  
    doc.setFontSize(12);
    doc.setTextColor(0,85,136);
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.text(10, 10, 'REPORTE DEPARTAMENTO');
   //doc.addPage();
    //doc.text(20, 20, 'Hello world!');
    doc.save('Lista de departamentos');
  });
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

