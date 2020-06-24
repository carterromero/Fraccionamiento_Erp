import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PaymentRecord } from 'src/app/payment-record';
import { PaymentRecordService } from 'src/app/payment-record.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment-record-list',
  templateUrl: './payment-record-list.component.html',
  styleUrls: ['./payment-record-list.component.scss']
})
export class PaymentRecordListComponent implements OnInit {

  general: Observable<PaymentRecord[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: PaymentRecordService,
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
          this.alertDisables = false;
          this.alertMessages =" se a eliminado correctamente";
        },
        error => {console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
        }
      );
  }

  generalDetails(id: number){
    this.router.navigate(['payment-record-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-payment-record', id]);
  }


}

