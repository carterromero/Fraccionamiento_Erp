import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';
import { Router } from '@angular/router';
import { BankAccounts } from '../../../bankAccounts';
import { BankAccountsService } from '../../../bank-accounts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  creditor: Observable<BankAccounts[]>;
  employee: Client = new Client();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: ClientService,
    private bankAccountsService: BankAccountsService,
    private router: Router) { }

    ngOnInit() {
      this.reloadDatas1() ;
    }

    reloadDatas1() 
    {
  
      this.bankAccountsService.getEmployeeList().subscribe(
        data => {
          console.log(data);
          this.creditor= this.bankAccountsService.getEmployeeList();
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
      this.employee = new Client();
    }

    save() {

      this.employee.user_id="3";
      this.employeeService.createEmployee(this.employee)
        .subscribe(data => 
          {
            console.log(data);
            this.alertDisables = false;
            this.alertMessages ="Se inserto correctamente";
            this.employee= new Client();
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

    this.save();    
  
 }

  gotoList() 
  {
    this.router.navigate(['client-list']);
  }

}