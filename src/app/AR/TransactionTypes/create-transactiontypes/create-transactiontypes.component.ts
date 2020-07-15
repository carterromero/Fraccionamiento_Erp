import { Component, OnInit } from '@angular/core';
import { TransactionTypes } from 'src/app/transaction-types';
import { TransactionTypesService } from 'src/app/transaction-types.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transactiontypes',
  templateUrl: './create-transactiontypes.component.html',
  styleUrls: ['./create-transactiontypes.component.scss']
})

export class CreateTransactionTypesComponent implements OnInit {

  employee: TransactionTypes = new TransactionTypes();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: TransactionTypesService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new TransactionTypes();
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

  else if(this.employee.condominums_id ==null ||  this.employee.condominums_id ==null ){
    this.alertDisable = false;
    this.alertMessage = "Registro  Incompleta";          
  }

  else if(this.employee.created_by ==null ||  this.employee.created_by ==null ){
    this.alertDisable = false;
    this.alertMessage = "Fecha de creacion Incompleta";          
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