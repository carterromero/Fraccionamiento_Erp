import { Component, OnInit } from '@angular/core';
import { TransactionTypesService } from 'src/app/transaction-types.service';
import { Router } from '@angular/router';
import { TransactionTypes } from 'src/app/transaction-types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transactiontypes-list',
  templateUrl: './transactiontypes-list.component.html',
  styleUrls: ['./transactiontypes-list.component.scss']
})
export class TransactionTypesListComponent implements OnInit {

  general: Observable<TransactionTypes[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: TransactionTypesService,
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
          this.alertMessages ="La Transicion se a eliminado correctamente";
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
    this.router.navigate(['transactiontypes-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-transactiontypes', id]);
  }

}
