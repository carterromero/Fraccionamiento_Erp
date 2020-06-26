import { Component, OnInit } from '@angular/core';
import { DepositAccount } from '../../depositAccount';
import { ActivatedRoute, Router } from '@angular/router';
import { DepositAccountService } from '../../deposit-account.service';

@Component({
  selector: 'app-deposit-account-details',
  templateUrl: './deposit-account-details.component.html',
  styleUrls: ['./deposit-account-details.component.scss']
})
export class DepositAccountDetailsComponent implements OnInit {
  id: number;
  employee: DepositAccount;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: DepositAccountService) { }

  ngOnInit() {
    this.employee = new DepositAccount();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });


  }
 
  

}
