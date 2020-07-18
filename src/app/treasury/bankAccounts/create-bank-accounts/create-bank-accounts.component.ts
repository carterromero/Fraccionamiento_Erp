import { Component, OnInit } from '@angular/core';
import { BankAccounts } from '../../../bankAccounts';
import { Router } from '@angular/router';
import { BankAccountsService } from '../../../bank-accounts.service';
import { ManageBanks } from '../../../manageBank';
import { ManageBanksService } from '../../../manage-banks.service';
import { Observable } from 'rxjs';
import { AccountsService } from "src/app/services/gl/accounts.service";
import { Accounts } from "src/app/services/gl/accounts";
import { PaymentDocuments} from "src/app/paymentDocuments";
import { PaymentDocumentsService } from "src/app/payment-documents.service";

@Component({
  selector: 'app-create-bank-accounts',
  templateUrl: './create-bank-accounts.component.html',
  styleUrls: ['./create-bank-accounts.component.scss']
})
export class CreateBankAccountsComponent implements OnInit {

  employee: BankAccounts = new BankAccounts();
  submitted = false;
   manages : Observable<ManageBanks[]>;
   accounts : Observable<Accounts[]>;
   documents : Observable<PaymentDocuments[]>;

  constructor(private employeeService: BankAccountsService, private paymentService:PaymentDocumentsService,
    private router: Router, private manageBanks:ManageBanksService, private accountService:AccountsService) { }

  ngOnInit() {
    //code
    this.reloadDatas();
    this.reloadData();
    this.reloadData1();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new BankAccounts();
  }

  reloadDatas() 
  {

    this.manageBanks.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.manages = this.manageBanks.getEmployeeList();
      },
      error => {
        console.log(error);
      }
    );      
  }

  reloadData() 
  {

    this.accountService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.accounts = this.accountService.getEmployeeList();
      },
      error => {
        console.log(error);
      }
    );      
  }

  reloadData1() 
  {

    this.paymentService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.documents = this.paymentService.getEmployeeList();
      },
      error => {
        console.log(error);
      }
    );      
  }

  save() {

   this.employee.created_by = Number(localStorage.getItem('id'));
   this.employee.last_updated_by = Number(localStorage.getItem('id'));

    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.gotoList();    
        }, 
      error => {
        console.log(error);    
      });

  }

  onSubmit() 
  {
    this.submitted = true;
    this.save();    
  }

  gotoList() 
  {
    this.router.navigate(['bank-accounts-list']);
  }

}
