import { Component, OnInit } from '@angular/core';
import { TransactionTypes } from 'src/app/transaction-types';
import { TransactionTypesService } from 'src/app/transaction-types.service';

import { LinesService } from "src/app/services/gl/lines.service";
import { Lines } from "src/app/services/gl/lines";

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-create-transactiontypes',
  templateUrl: './create-transactiontypes.component.html',
  styleUrls: ['./create-transactiontypes.component.scss']
})

export class CreateTransactionTypesComponent implements OnInit {

  employee: TransactionTypes = new TransactionTypes();
  Lines:Observable<Lines[]>
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(
    private employeeService: TransactionTypesService,
    private LinesService:LinesService,
    private router: Router) { }

  ngOnInit() {
    this.reloadDatas();
  }

  newEmployee(): void {
    this.employee = new TransactionTypes();
  }
  reloadDatas() 
  {
    
    this.LinesService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.Lines = this.LinesService.getEmployeeList();
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

  save() {

    //this.employee.transaction_types_id=3;
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto la transacion correctamente";
          this.employee= new TransactionTypes();
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

  if(this.employee.transaction_types_name_type_transaction =="" ||  this.employee.transaction_types_name_type_transaction ==null ){
    this.alertDisable = false;
    this.alertMessage = "	Nombre del tipo de transacción Incompleto";          
  }

  else if(this.employee.transaction_types_description =="" ||  this.employee.transaction_types_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "	Descripción  Incompleta";          
  }

  else if(this.employee.transaction_types_class_transaction =="" ||  this.employee.transaction_types_class_transaction ==null ){
    this.alertDisable = false;
    this.alertMessage = "	Clase de transacción Incompleta";          
  }


  else if(this.employee.transaction_types_accounting_distribution =="" ||  this.employee.transaction_types_accounting_distribution ==null ){
    this.alertDisable = false;
    this.alertMessage = "	Distribución contable Incompleta";          
  }



  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['transactiontypes-list']);
  }

}