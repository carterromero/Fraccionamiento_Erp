import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from "../../../../services/gl/accounts.service";
import { Accounts } from "../../../../services/gl/accounts";


@Component({
  selector: 'app-accounts-details',
  templateUrl: './accounts-details.component.html',
  styleUrls: ['./accounts-details.component.scss']
})
export class AccountsDetailsComponent implements OnInit {

  p_id: number;
  employee: Accounts;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: AccountsService) { }

  ngOnInit() {
    this.employee = new Accounts();    
    this.p_id = this.route.firstChild.snapshot.params['p_id']
    console.log(this.p_id);
    
    
    this.employeeService.getEmployee(this.p_id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }
}
