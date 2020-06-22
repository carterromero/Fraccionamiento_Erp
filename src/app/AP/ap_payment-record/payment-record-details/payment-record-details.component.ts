import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentRecord } from 'src/app/payment-record';
import { PaymentRecordService } from 'src/app/payment-record.service';
@Component({
  selector: 'app-payment-record-details',
  templateUrl: './payment-record-details.component.html',
  styleUrls: ['./payment-record-details.component.scss']
})
export class PaymentRecordDetailsComponent implements OnInit {

  id: number;
  employee: PaymentRecord;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PaymentRecordService) { }

  ngOnInit() {
    this.employee = new PaymentRecord();    
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
