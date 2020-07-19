import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDocumentsService } from '../../../payment-documents.service';
import { PaymentDocuments } from '../../../paymentDocuments';
import { ManageBanks } from '../../../manageBank';
import { ManageBanksService } from '../../../manage-banks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-payment-documents',
  templateUrl: './update-payment-documents.component.html',
  styleUrls: ['./update-payment-documents.component.scss']
})
export class UpdatePaymentDocumentsComponent implements OnInit {

  id: number;
  employee: PaymentDocuments;
  manages : Observable<ManageBanks[]>;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PaymentDocumentsService,private manageBanks:ManageBanksService) { }

    reloadDatas() 
  {

    this.manageBanks.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.manages = this.manageBanks.getEmployeeList();
      },
      error => {
        console.log(error);
      }
    );      
  }

  ngOnInit() {
    this.reloadDatas();
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

    this.employee.condominums_id=Number(localStorage.getItem('condominums'));
    this.employee.last_updated_by = Number(localStorage.getItem('id'));
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
