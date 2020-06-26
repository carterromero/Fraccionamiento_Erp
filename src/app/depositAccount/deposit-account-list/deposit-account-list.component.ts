import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepositAccount } from '../../depositAccount';
import { Router } from '@angular/router';
import { DepositAccountService } from '../../deposit-account.service';

@Component({
  selector: 'app-deposit-account-list',
  templateUrl: './deposit-account-list.component.html',
  styleUrls: ['./deposit-account-list.component.scss']
})
export class DepositAccountListComponent implements OnInit {

  general: Observable<DepositAccount[]>;

  constructor(private generalService: DepositAccountService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeeList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });

      
  }

  deleteGeneral(id: number) {
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => {console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']); 
        }
      );
  }

  generalDetails(id: number){
    this.router.navigate(['deposit-account-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-deposit-account', id]);
  }

}
