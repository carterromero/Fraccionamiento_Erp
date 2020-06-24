import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDocumentsService } from '../../../payment-documents.service';
import { PaymentDocuments } from '../../../paymentDocuments';

@Component({
  selector: 'app-update-payment-documents',
  templateUrl: './update-payment-documents.component.html',
  styleUrls: ['./update-payment-documents.component.scss']
})
export class UpdatePaymentDocumentsComponent implements OnInit {

  id: number;
  employee: PaymentDocuments;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PaymentDocumentsService) { }

  ngOnInit() {

    this.employee = new PaymentDocuments();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.payment_documents_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.payment_documents_status = (String(this.employee.payment_documents_status) == "false") ? null:"false";
        console.log(this.employee.payment_documents_status);
      }, error => {
        console.log(error);
      });
  }

   

  updateEmployee() {

    //this.employee.userid="3";
    console.log(this.employee.payment_documents_status);
    
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
    this.router.navigate(['payment-documents-list']);
  }


}
