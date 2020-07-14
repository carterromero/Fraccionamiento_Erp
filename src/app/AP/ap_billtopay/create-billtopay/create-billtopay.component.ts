import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Billtopay } from 'src/app/billtopay';
import { Billtopayservice } from 'src/app/billtopay.service';


@Component({
  selector: 'app-create-billtopay',
  templateUrl: './create-billtopay.component.html',
  styleUrls: ['./create-billtopay.component.scss']
})
export class CreateBilltopayComponent implements OnInit {

  employee: Billtopay = new Billtopay();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: Billtopayservice,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new Billtopay();
  }

  save() {

    this.employee.p_userid="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto la factura correctamente";
          this.employee= new Billtopay();
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

  if(this.employee.billtopay_invoice_folio == "" ||  this.employee.billtopay_invoice_folio ==null || this.employee.billtopay_invoice_folio == this.employee.billtopay_invoice_folio ){
    this.alertDisable = false;
    this.alertMessage = "campo Incompleto o repetido";          
  }

   else if(this.employee.billtopay_invoice_date =="" ||  this.employee.billtopay_invoice_date ==null ){
    this.alertDisable = false;
    this.alertMessage = "Dirección Incompleta";          
  }

  else if(this.employee.billtopay_scheduled_payment_date =="" ||  this.employee.billtopay_scheduled_payment_date ==null ){
    this.alertDisable = false;
    this.alertMessage = "Descripción Incompleta";          
  }


  else if(this.employee.billtopay_amount == "" ||  this.employee.billtopay_amount ==null ){
    this.alertDisable = false;
    this.alertMessage = "RFC Incompleta";          
  }

  else if(this.employee.billtopay_service_description =="" ||  this.employee.billtopay_service_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "Registro Patronal Incompleta";          
  }



  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['billtopay-list']);
  }

}