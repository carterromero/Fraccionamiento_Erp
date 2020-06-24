import { Component, OnInit } from '@angular/core';
import { BankAccounts } from '../../../bankAccounts';
import { Router } from '@angular/router';
import { BankAccountsService } from '../../../bank-accounts.service';

@Component({
  selector: 'app-create-bank-accounts',
  templateUrl: './create-bank-accounts.component.html',
  styleUrls: ['./create-bank-accounts.component.scss']
})
export class CreateBankAccountsComponent implements OnInit {

  employee: BankAccounts = new BankAccounts();
  submitted = false;

  constructor(private employeeService: BankAccountsService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new BankAccounts();
  }

  save() {

    //this.employee.userid="3";


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
