import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/services/admin/transaction';
import { Observable } from 'rxjs';
import { Module } from 'src/app/services/admin/module';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/admin/transaction.service';
import { ModuleService } from 'src/app/services/admin/module.service';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.scss']
})
export class UpdateTransactionComponent implements OnInit {

  id: number;
  employee: Transaction;
  addresses: Observable<Module[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: TransactionService ,
    private addressService: ModuleService
    
    ) { }

  ngOnInit() {

    this.employee = new Transaction();
    this.id = this.route.firstChild.snapshot.params['id']
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => 
        {
        console.log(data);
        this.employee = data;
        this.employee.transaction_consult = (String(this.employee.transaction_consult) == "false") ? null:"true";
        this.employee.transaction_insert = (String(this.employee.transaction_insert) == "false") ? null:"true";
        this.employee.transaction_update = (String(this.employee.transaction_update) == "false") ? null:"true";
        this.employee.transaction_delete = (String(this.employee.transaction_delete) == "false") ? null:"true";
    
        },
       error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }

      });
      this.reloadDatas() ;
  }

   

  updateEmployee() 
  {

    this.employee.userid="3";
    console.log(this.employee)
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo las transacciones del modulo correctamente";  
      }, 
      error => 
      {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }

  reloadDatas() 
  {

    this.addressService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.addresses = this.addressService.getEmployeeList();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }

  onSubmit() {
    this.alertDisable = true;
    this.alertDisables = true;
  
    
      this.updateEmployee();    
    
  }

  gotoList(id:string) {
    this.router.navigate(['transaction-list',id]);
  }

}
