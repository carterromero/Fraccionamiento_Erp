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
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

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
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }    
      });

      
  }

  deleteGeneral(id: number) {
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => {
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }  
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




