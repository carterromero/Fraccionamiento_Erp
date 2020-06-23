import { Component, OnInit } from '@angular/core';
import { PaymentDocuments } from '../../../paymentDocuments';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDocumentsService } from '../../../payment-documents.service';

@Component({
  selector: 'app-payment-documents-details',
  templateUrl: './payment-documents-details.component.html',
  styleUrls: ['./payment-documents-details.component.scss']
})
export class PaymentDocumentsDetailsComponent implements OnInit {
  id: number;
  employee: PaymentDocuments;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PaymentDocumentsService) { }

  ngOnInit() {
    this.employee = new PaymentDocuments();    
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
