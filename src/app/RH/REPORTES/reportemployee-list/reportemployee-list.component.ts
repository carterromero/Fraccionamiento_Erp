import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as jsPDF from 'jspdf';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-reportemployee-list',
  templateUrl: './reportemployee-list.component.html',
  styleUrls: ['./reportemployee-list.component.scss']
})
export class ReportEmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  employe: Employee = new Employee();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  verSeleccion: string        = '';
  
  constructor(private employeeService: EmployeeService,
    private router: Router, private route: ActivatedRoute) { }
    filterPost = '';
    ngOnInit(): void {
      this.reloadData1();
     // this.reloadData();
     // this.reloadData();
      
  }

  reloadData1() { 

    this.employeeService.getReporParametro().subscribe(
      data => {
        console.log(data);
        this.employees = this.employeeService.getReporParametro();
        this.reloadData();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];          
        }
      }
    );    

    
  }
     reloadData() {
     this.verSeleccion=this.employe.employees_frequency_payment;
      this.employeeService.getReporEmployee(this.verSeleccion).subscribe(
      data => {
        this.employees = this.employeeService.getReporEmployee(this.verSeleccion);
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


  getReporEmployee(){
    this.router.navigate(['reportemployee-list']);
  }



  imprimirLista(){
    const doc = new jsPDF('p','mm','letter');
    doc.setFontSize(12);
    doc.setTextColor(0,85,136);
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.text(10, 10, 'REPORTE EMPLEADOS ');
    doc.fromHTML(document.getElementById('frmEmployee'),20,20);
   //doc.addPage();
    //doc.text(20, 20, 'Hello world!');
    doc.save('Lista de empleados');
  }


  query(ref,value:boolean){
  if (value)
  return ref.where('status','=',1);
  else
  return ref.where('status','=',1);
  }


}

