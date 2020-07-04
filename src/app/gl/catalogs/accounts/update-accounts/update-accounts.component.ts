import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AccountsService } from "../../../../services/gl/accounts.service";
import { Accounts } from "../../../../services/gl/accounts";
@Component({
  selector: 'app-update-accounts',
  templateUrl: './update-accounts.component.html',
  styleUrls: ['./update-accounts.component.scss']
})
export class UpdateAccountsComponent implements OnInit {

  p_id: number;
  employee: Accounts;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: AccountsService) { }

  ngOnInit() {

    this.employee = new Accounts();
    this.p_id = this.route.firstChild.snapshot.params['p_id']
    console.log(this.employee.accounting_accounts_status);
    this.employeeService.getEmployee(this.p_id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.accounting_accounts_status = (String(this.employee.accounting_accounts_status) == "false") ? null:"false";
        console.log(this.employee.accounting_accounts_status);
      }, error => {
        console.log(error);let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
  }

   

  updateEmployee() {

    this.employee.user_id="3";
    console.log(this.employee.accounting_accounts_status);
    
    this.employeeService.updateEmployee(this.p_id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo  correctamente";
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
  
    if(this.employee.accounting_accounts_currency_code =="" ||  this.employee.accounting_accounts_currency_code ==null ){
      this.alertDisable = false;
      this.alertMessage = "codigo de moneda incompleta ";          
    }
  
    else if(this.employee.accounting_accounts_fiscal_year =="" ||  this.employee.accounting_accounts_fiscal_year ==null ){
      this.alertDisable = false;
      this.alertMessage = "año Incompleta";          
    }
  
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['accounts-list']);
  }

}
