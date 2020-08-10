import { Component, OnInit } from '@angular/core';
import { PaymentTerms } from 'src/app/payment-terms';
import { PaymentTermsService } from 'src/app/payment-terms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-payment-terms',
  templateUrl: './create-payment-terms.component.html',
  styleUrls: ['./create-payment-terms.component.scss']
})
//crear metodo condominio_id
export class CreatePaymentTermsComponent implements OnInit {

  employee: PaymentTerms = new PaymentTerms();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: PaymentTermsService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new PaymentTerms();
  }

  save() {

    //this.employee.userid="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages = "Se inserto Termino correctamente";
        this.employee = new PaymentTerms();
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

    if (this.employee.payment_terms_name_payment_term == "" || this.employee.payment_terms_name_payment_term == null) {
      this.alertDisable = false;
      this.alertMessage = "Nombre del Termino de pago Incompleto";
    }

    else if (this.employee.payment_terms_description == "" || this.employee.payment_terms_description == null) {
      this.alertDisable = false;
      this.alertMessage = "Descripcion Incompleta";
    }

    else if (this.employee.payment_terms_days_pay == null || this.employee.payment_terms_days_pay == null) {
      this.alertDisable = false;
      this.alertMessage = "Dias para pago Incompleta";
    }

    else {
      this.save();
    }
  }

  gotoList() {
    this.router.navigate(['payment-terms-list']);
  }

}