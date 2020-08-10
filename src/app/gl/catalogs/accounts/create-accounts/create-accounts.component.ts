import { Component, OnInit } from '@angular/core';
import { AccountsService } from "../../../../services/gl/accounts.service";
import { Accounts } from "../../../../services/gl/accounts";
import { Router } from '@angular/router';
import { PeriodsService } from "../../../../services/gl/periods.service";
import { Periods } from "../../../../services/gl/periods";
import { Observable } from "rxjs";

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.scss']
})
export class CreateAccountsComponent implements OnInit {
 
 
  employee: Accounts = new Accounts();
  periods: Observable<Periods[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: AccountsService,
    private periodsService: PeriodsService,
    private router: Router) { }

  ngOnInit() {
    this.reloadDatas1() 
  }

  reloadDatas1() {
    this.periodsService.getPeriodsList().subscribe(
      data => {
        console.log(data);
        this.periods = this.periodsService.getPeriodsList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);     
      });
  }

  newEmployee(): void {
    this.employee = new Accounts();
  }

  save() {
  this.employee.accounting_accounts_condominums_id = localStorage.getItem('condominums');
this.employee.created_by = localStorage.getItem('id');  
   
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto correctamente";
          this.employee= new Accounts();
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

 

   if(this.employee.accounting_accounts_currency_code =="" ||  this.employee.accounting_accounts_currency_code ==null ){
    this.alertDisable = false;
    this.alertMessage = "codigo de moneda incompleta ";          
  }

  else if(this.employee.accounting_accounts_fiscal_year =="" ||  this.employee.accounting_accounts_fiscal_year ==null ){
    this.alertDisable = false;
    this.alertMessage = "año Incompleta";          
  }

  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['accounts-list']);
  }

}