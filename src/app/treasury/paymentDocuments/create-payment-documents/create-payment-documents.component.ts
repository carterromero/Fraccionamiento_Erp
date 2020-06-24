import { Component, OnInit } from '@angular/core';
import { PaymentDocuments } from '../../../paymentDocuments';
import { Router } from '@angular/router';
import { PaymentDocumentsService } from '../../../payment-documents.service';

@Component({
  selector: 'app-create-payment-documents',
  templateUrl: './create-payment-documents.component.html',
  styleUrls: ['./create-payment-documents.component.scss']
})
export class CreatePaymentDocumentsComponent implements OnInit {

  employee: PaymentDocuments = new PaymentDocuments();
  submitted = false;

  constructor(private employeeService: PaymentDocumentsService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new PaymentDocuments();
  }

  save() {

    //this.employee.userid="3";


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
    this.router.navigate(['payment-documents-list']);
  }

}
