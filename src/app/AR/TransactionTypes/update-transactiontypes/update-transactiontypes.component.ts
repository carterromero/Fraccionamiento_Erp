import { Component, OnInit } from '@angular/core';
import { TransactionTypes } from 'src/app/transaction-types';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionTypesService } from 'src/app/transaction-types.service';


@Component({
  selector: 'app-update-transactiontypes',
  templateUrl: './update-transactiontypes.component.html',
  styleUrls: ['./update-transactiontypes.component.scss']
})
export class UpdateTransactionTypesComponent implements OnInit {

  id: number;
  employee: TransactionTypes;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: TransactionTypesService) { }

  ngOnInit() {

    this.employee = new TransactionTypes();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.transaction_types_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.transaction_types_status = (String(this.employee.transaction_types_status) == "false") ? null:"false";
        console.log(this.employee.transaction_types_status);
      }, error => {
        console.log(error);let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
  }

   

  updateEmployee() {

    //this.employee.transaction_types_id=3;
    console.log(this.employee.transaction_types_status);
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo la Transicion correctamente";
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

  onSubmit() {
    

    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.employee.transaction_types_name_type_transaction =="" ||  this.employee.transaction_types_name_type_transaction ==null ){
      this.alertDisable = false;
      this.alertMessage = "Nombre del tipo de transacción Incompleto";          
    }
  
    else if(this.employee.transaction_types_description =="" ||  this.employee.transaction_types_description ==null ){
      this.alertDisable = false;
      this.alertMessage = "Descripción  Incompleta";          
    }
  
    else if(this.employee.transaction_types_class_transaction =="" ||  this.employee.transaction_types_class_transaction ==null ){
      this.alertDisable = false;
      this.alertMessage = "Clase de transacción Incompleta";          
    }
  
  
    else if(this.employee.transaction_types_accounting_distribution =="" ||  this.employee.transaction_types_accounting_distribution ==null ){
      this.alertDisable = false;
      this.alertMessage = "Distribución contable Incompleta";          
    }
  
    else if(this.employee.condominums_id ==null ||  this.employee.condominums_id ==null ){
      this.alertDisable = false;
      this.alertMessage = "Condominus Incompleta";          
    }
  
    else if(this.employee.created_by ==null ||  this.employee.created_by ==null ){
      this.alertDisable = false;
      this.alertMessage = "create by Incompleta";          
    }
  
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['transactiontypes-list']);
  }

}
