import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/services/admin/transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/admin/transaction.service';
import { Observable } from 'rxjs';
import { Module } from 'src/app/services/admin/module';
import { ModuleService } from 'src/app/services/admin/module.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  id: number;
  employee: Transaction;
  addresses: Observable<Module[]>;
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: TransactionService,
    private addressService: ModuleService 
    
    ) { }

  ngOnInit() {
    this.employee = new Transaction();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    this.reloadDatas() ;
    
    
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


  reloadDatas() 
  {

    this.addressService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.addresses = this.addressService.getEmployeeList();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }

  generalDetails(id: string){
    this.router.navigate(['transaction-list', id]);
  }

}
