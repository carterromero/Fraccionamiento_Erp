import { Component, OnInit } from '@angular/core';
import { PaymentsAR } from 'src/app/payments-ar';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentsARService } from 'src/app/payments-ar.service';

@Component({
  selector: 'app-payments-ar-details',
  templateUrl: './payments-ar-details.component.html',
  styleUrls: ['./payments-ar-details.component.scss']
})
export class PaymentsARDetailsComponent implements OnInit {

  id: number;
  employee: PaymentsAR;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PaymentsARService) { }

  ngOnInit() {
    this.employee = new PaymentsAR();    
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
