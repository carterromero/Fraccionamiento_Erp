import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankAccountsService } from '../../../bank-accounts.service';
import { BankAccounts } from '../../../bankAccounts';

@Component({
  selector: 'app-update-bank-accounts',
  templateUrl: './update-bank-accounts.component.html',
  styleUrls: ['./update-bank-accounts.component.scss']
})
export class UpdateBankAccountsComponent implements OnInit {

  id: number;
  employee: BankAccounts;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: BankAccountsService) { }

  ngOnInit() {

    this.employee = new BankAccounts();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.bank_accounts_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.bank_accounts_status = (String(this.employee.bank_accounts_status) == "false") ? null:"false";
        console.log(this.employee.bank_accounts_status);
      }, error => {
        console.log(error);
      });
  }

   

  updateEmployee() {

    //this.employee.userid="3";
    console.log(this.employee.bank_accounts_status);
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {console.log(data);
        this.gotoList();  
      }, 
      error => {
        console.log(error);
        
      });
    
  
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['bank-accounts-list']);
  }


}
