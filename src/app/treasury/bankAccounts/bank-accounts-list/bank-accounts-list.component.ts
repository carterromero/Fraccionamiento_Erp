import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BankAccounts } from '../../../bankAccounts';
import { Router } from '@angular/router';
import { BankAccountsService } from '../../../bank-accounts.service';

@Component({
  selector: 'app-bank-accounts-list',
  templateUrl: './bank-accounts-list.component.html',
  styleUrls: ['./bank-accounts-list.component.scss']
})
export class BankAccountsListComponent implements OnInit {

  general: Observable<BankAccounts[]>;

  constructor(private generalService: BankAccountsService,
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
    this.router.navigate(['bank-accounts-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-bank-accounts', id]);
  }

}
