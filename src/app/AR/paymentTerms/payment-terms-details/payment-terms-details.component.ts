import { Component, OnInit } from '@angular/core';
import { PaymentTerms } from 'src/app/payment-terms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentTermsService } from 'src/app/payment-terms.service';

@Component({
  selector: 'app-payment-terms-details',
  templateUrl: './payment-terms-details.component.html',
  styleUrls: ['./payment-terms-details.component.scss']
})
export class PaymentTermsDetailsComponent implements OnInit {

  id: number;
  employee: PaymentTerms;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PaymentTermsService) { }

  ngOnInit() {
    this.employee = new PaymentTerms();    
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
