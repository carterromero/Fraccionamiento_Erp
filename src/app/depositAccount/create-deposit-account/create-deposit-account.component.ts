import { Component, OnInit } from '@angular/core';
import { DepositAccount } from '../../depositAccount';
import { Router } from '@angular/router';
import { DepositAccountService } from '../../deposit-account.service';

@Component({
  selector: 'app-create-deposit-account',
  templateUrl: './create-deposit-account.component.html',
  styleUrls: ['./create-deposit-account.component.scss']
})
export class CreateDepositAccountComponent implements OnInit {

  employee: DepositAccount = new DepositAccount();
  submitted = false;

  constructor(private employeeService: DepositAccountService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new DepositAccount();
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
    this.router.navigate(['deposit-account-list']);
  }

}
