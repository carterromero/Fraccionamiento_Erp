import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/services/admin/transaction.service';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/services/admin/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  id: number;
  general: Observable<Transaction[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: TransactionService,
    private router: Router,
    private route: ActivatedRoute
    
    ) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.id = this.route.firstChild.snapshot.params['id']

    this.generalService.getEmployeeList(this.id).subscribe(
      data => {
        this.general = this.generalService.getEmployeeList(this.id);
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

 

  generalDetails(id: number){
    this.router.navigate(['transaction-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-transaction', id]);
  }

}
