import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentRecord } from 'src/app/payment-record';
import { PaymentRecordService } from 'src/app/payment-record.service';
import * as jsPDF from 'jspdf'
@Component({
  selector: 'app-payment-record-details',
  templateUrl: './payment-record-details.component.html',
  styleUrls: ['./payment-record-details.component.scss']
})
export class PaymentRecordDetailsComponent implements OnInit {

  id: number;
  employee: PaymentRecord;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PaymentRecordService) { }

    imprimirLista(){
      const doc = new jsPDF
      doc.text(20, 20, 'REPORTE CONTABLE ');
     doc.fromHTML(document.getElementById('from-informacion'),20,30);
     //doc.addPage();
      //doc.text(20, 20, 'Hello world!');
      doc.save('Reporte contable');
  
  
    }

  ngOnInit() {
    this.employee = new PaymentRecord();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }
}
