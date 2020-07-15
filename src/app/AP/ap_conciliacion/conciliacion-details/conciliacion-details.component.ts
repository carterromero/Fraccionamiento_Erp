import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conciliacion } from 'src/app/conciliacion';
import { Observable } from 'rxjs';
import { ConciliacionService } from 'src/app/conciliacion.service';
import { Billtopay } from 'src/app/billtopay';
import { Billtopayservice } from 'src/app/billtopay.service';
import { PaymentRecord } from 'src/app/payment-record';
import { PaymentRecordService } from 'src/app/payment-record.service';
import { AccountsService } from "src/app/services/gl/accounts.service";
import { Accounts } from "src/app/services/gl/accounts";
@Component({
  selector: 'app-conciliacion-details',
  templateUrl: './conciliacion-details.component.html',
  styleUrls: ['./conciliacion-details.component.scss']
})
export class ConciliacionDetailsComponent implements OnInit {

  employee: Conciliacion = new Conciliacion();
  purcharse: Observable<Billtopay[]>;
  purcharses: Observable<PaymentRecord[]>;
  purcharsess: Observable<Accounts[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: ConciliacionService,
    private billtopayservice: Billtopayservice,
    private paymentRecordService: PaymentRecordService,
    private accountsService: AccountsService,
    private router: Router) { }

    ngOnInit() {
      this.reloadDatas();
      this.reloadDatass();
      this.reloadDatasss();
    }

    reloadDatas() 
    {
  
      this.billtopayservice.getEmployeeList().subscribe(
        data => {
          console.log(data);
          this.purcharse = this.billtopayservice.getEmployeeList();
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
    reloadDatass() 
    {
  
      this.paymentRecordService.getEmployeeList().subscribe(
        data => {
          console.log(data);
          this.purcharses = this.paymentRecordService.getEmployeeList();
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
    reloadDatasss() 
    {
  
      this.accountsService.getEmployeeList().subscribe(
        data => {
          console.log(data);
          this.purcharsess = this.accountsService.getEmployeeList();
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

    newEmployee(): void {
      this.employee = new Conciliacion();
    }

    save() {

      this.employee.user_id="3";
      this.employeeService.createEmployee(this.employee)
        .subscribe(data => 
          {
            console.log(data);
            this.alertDisables = false;
            this.alertMessages ="Se inserto la acredor correctamente";
            this.employee= new Conciliacion();
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

 onSubmit() 
  {

  this.alertDisable = true;
  this.alertDisables = true;

  if(this.employee.concilitiation_origin =="" ||  this.employee.concilitiation_origin ==null ){
    this.alertDisable = false;
    this.alertMessage = "Nombre Incompleto";          
  }



  else{
    this.save();    
  }
 }

  gotoList() 
  {
    this.router.navigate(['creditor-list']);
  }

}