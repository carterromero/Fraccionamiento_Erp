import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepositAccountService } from '../../deposit-account.service';
import { DepositAccount } from '../../depositAccount';

@Component({
  selector: 'app-update-deposit-account',
  templateUrl: './update-deposit-account.component.html',
  styleUrls: ['./update-deposit-account.component.scss']
})
export class UpdateDepositAccountComponent implements OnInit {

  id: number;
  employee: DepositAccount;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: DepositAccountService) { }

  ngOnInit() {

    this.employee = new DepositAccount();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.deposit_account_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.deposit_account_status = (String(this.employee.deposit_account_status) == "false") ? null:"false";
        console.log(this.employee.deposit_account_status);
      }, error => {
        console.log(error);
      });
  }

   

  updateEmployee() {

    //this.employee.userid="3";
    console.log(this.employee.deposit_account_status);
    
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
    this.router.navigate(['deposit-account-list']);
  }


}
