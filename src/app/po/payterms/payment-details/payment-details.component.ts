import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/payment';
import { ActivatedRoute, Router } from '@angular/router';
import { PaytmentService } from 'src/app/paytment.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  id: number;
  employee: Payment;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PaytmentService) { }

  ngOnInit() {
    this.employee = new Payment();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });


  }
 

}
