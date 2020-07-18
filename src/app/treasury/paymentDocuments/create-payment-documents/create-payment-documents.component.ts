import { Component, OnInit } from '@angular/core';
import { PaymentDocuments } from '../../../paymentDocuments';
import { Router } from '@angular/router';
import { PaymentDocumentsService } from '../../../payment-documents.service';
import { ManageBanks } from '../../../manageBank';
import { ManageBanksService } from '../../../manage-banks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-payment-documents',
  templateUrl: './create-payment-documents.component.html',
  styleUrls: ['./create-payment-documents.component.scss']
})
export class CreatePaymentDocumentsComponent implements OnInit {

  employee: PaymentDocuments = new PaymentDocuments();
  manages : Observable<ManageBanks[]>;
  submitted = false;

  constructor(private employeeService: PaymentDocumentsService,
    private router: Router,private manageBanks:ManageBanksService) { }

  ngOnInit() {
    //code
    this.reloadDatas();
  }

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
  newEmployee(): void {
    this.submitted = false;
    this.employee = new PaymentDocuments();
  }

  save() {

    //this.employee.userid="3";
   this.employee.condominums_id=Number(localStorage.getItem('condominums'));
   this.employee.created_by = Number(localStorage.getItem('id'));
   this.employee.last_updated_by = Number(localStorage.getItem('id'));
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
