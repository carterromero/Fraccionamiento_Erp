import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionsEntrys } from 'src/app/transactionsentrys';
import { TransactionsEntrysService } from 'src/app/transactionsentrys.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactionsentrys-list',
  templateUrl: './transactionsentrys-list.component.html',
  styleUrls: ['./transactionsentrys-list.component.scss']
})
export class TransactionsentrysListComponent implements OnInit {

  general: Observable<TransactionsEntrys[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: TransactionsEntrysService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployeeList().subscribe(
      data => {
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
    this.alertDisable = true;
    this.alertDisables = true;
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages ="La Trnsacción se a eliminado correctamente";
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
    this.router.navigate(['categories-details', id]);
  }

  updateTransac(id: number){
    this.router.navigate(['update-categories', id]);
  }

}
