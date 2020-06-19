import { Component, OnInit } from '@angular/core';
import { BankAccounts } from '../../../bankAccounts';
import { ActivatedRoute, Router } from '@angular/router';
import { BankAccountsService } from '../../../bank-accounts.service';

@Component({
  selector: 'app-bank-accounts-details',
  templateUrl: './bank-accounts-details.component.html',
  styleUrls: ['./bank-accounts-details.component.scss']
})
export class BankAccountsDetailsComponent implements OnInit {
  id: number;
  employee: BankAccounts;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: BankAccountsService) { }

  ngOnInit() {
    this.employee = new BankAccounts();    
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
