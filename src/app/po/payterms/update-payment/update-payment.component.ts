import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/payment';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/supplier.service';
import { PaytmentService } from 'src/app/paytment.service';

@Component({
  selector: 'app-update-payment',
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.scss']
})
export class UpdatePaymentComponent implements OnInit {

  id: number;
  employee: Payment;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PaytmentService) { }

  ngOnInit() {

    this.employee = new Payment();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.payment_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.payment_status = (String(this.employee.payment_status) == "false") ? null:"false";
        console.log(this.employee.payment_status);
      }, error => {
        console.log(error);
      });
  }

   

  updateEmployee() {

    this.employee.userid="3";
    console.log(this.employee.payment_status);
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {console.log(data);
        this.gotoList();  
      }, 
      error => {
        console.log(error);
        
      });
    
  
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['payment_terms-list']);
  }

}
