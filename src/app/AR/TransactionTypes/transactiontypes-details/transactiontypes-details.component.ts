import { Component, OnInit } from '@angular/core';
import { TransactionTypes } from 'src/app/transaction-types';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionTypesService } from 'src/app/transaction-types.service';

@Component({
  selector: 'app-transactiontypes-details',
  templateUrl: './transactiontypes-details.component.html',
  styleUrls: ['./transactiontypes-details.component.scss']
})
export class TransactionTypesDetailsComponent implements OnInit {

  id: number;
  employee: TransactionTypes;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: TransactionTypesService) { }

  ngOnInit() {
    this.employee = new TransactionTypes();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.employeeService.getEmployee(this.id)
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
