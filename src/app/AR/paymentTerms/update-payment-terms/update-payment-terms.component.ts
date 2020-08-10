import { Component, OnInit } from '@angular/core';
import { PaymentTerms } from 'src/app/payment-terms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentTermsService } from 'src/app/payment-terms.service';


@Component({
  selector: 'app-update-payment-terms',
  templateUrl: './update-payment-terms.component.html',
  styleUrls: ['./update-payment-terms.component.scss']
})
export class UpdatePaymentTermsComponent implements OnInit {

  id: number;
  employee: PaymentTerms;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PaymentTermsService) { }

  ngOnInit() {

    this.employee = new PaymentTerms();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.payment_terms_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.payment_terms_status = (String(this.employee.payment_terms_status) == "false") ? null:"false";
        console.log(this.employee.payment_terms_status);
      }, error => {
        console.log(error);let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
  }

   

  updateEmployee() {

    //this.employee.userid="3";
    console.log(this.employee.payment_terms_status);
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo la Termino correctamente";
      }, 
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
    
  
  }

  onSubmit() {
    

    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.employee.payment_terms_name_payment_term =="" ||  this.employee.payment_terms_name_payment_term ==null ){
      this.alertDisable = false;
      this.alertMessage = "Nombre Incompleto";          
    }
  
    else if(this.employee.payment_terms_description =="" ||  this.employee.payment_terms_description ==null ){
      this.alertDisable = false;
      this.alertMessage = "Dirección Incompleta";          
    }
  
    else if(this.employee.payment_terms_days_pay ==null ||  this.employee.payment_terms_days_pay ==null ){
      this.alertDisable = false;
      this.alertMessage = "Descripción Incompleta";          
    }
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['payment-terms-list']);
  }

}
