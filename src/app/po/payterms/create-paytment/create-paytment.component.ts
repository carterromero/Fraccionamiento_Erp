import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/payment';
import { PaytmentService } from 'src/app/paytment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-paytment',
  templateUrl: './create-paytment.component.html',
  styleUrls: ['./create-paytment.component.scss']
})
export class CreatePaytmentComponent implements OnInit {
employee: Payment = new Payment();
  submitted = false;

  constructor(private employeeService: PaytmentService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Payment();
  }

  save() {

    this.employee.userid="3";


    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.gotoList();    
        }, 
      error => {
        console.log(error);    
      });

  }

  onSubmit() 
  {
    this.submitted = true;
    this.save();    
  }

  gotoList() 
  {
    this.router.navigate(['payment_terms-list']);
  }

}
