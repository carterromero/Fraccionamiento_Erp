import { Component, OnInit } from '@angular/core';
import { PaymentsAR } from 'src/app/payments-ar';
import { PaymentsARService } from 'src/app/payments-ar.service';

/* 
import {  } from 'src/app/';
import {  } from 'src/app/'; */
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-payments-ar',
  templateUrl: './create-payments-ar.component.html',
  styleUrls: ['./create-payments-ar.component.scss']
})

export class CreatePaymentsARComponent implements OnInit {

  employee: PaymentsAR = new PaymentsAR();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: PaymentsARService,
    private router: Router) { }

  ngOnInit() {

  }

  /* reloadDatas() 
  {
    this.CustomerService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.customer = this.CustomerService.getEmployeeList();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];          
        }
      }
    );
  } */

  newEmployee(): void {
    this.employee = new PaymentsAR();
  }

  save() {

    //this.employee.userid="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages = "Se inserto la Pago correctamente";
        this.employee = new PaymentsAR();
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

    if (this.employee.payments_transaction_type == "" || this.employee.payments_transaction_type == null) {
      this.alertDisable = false;
      this.alertMessage = "•	Tipo de Transacción Incompleto";
    }

    else if (this.employee.payments_name_resident == "" || this.employee.payments_name_resident == null) {
      this.alertDisable = false;
      this.alertMessage = "•	Nombre del Residente Incompleta";
    }

    else if (this.employee.payments_deposit_account == null || this.employee.payments_deposit_account == null) {
      this.alertDisable = false;
      this.alertMessage = "•	Cuenta de Deposito Incompleta";
    }


    else if (this.employee.payments_amount_payable == null || this.employee.payments_amount_payable == null) {
      this.alertDisable = false;
      this.alertMessage = "•	Monto a Pagar Incompleta";
    }

    else if (this.employee.condominums_id == null || this.employee.condominums_id == null) {
      this.alertDisable = false;
      this.alertMessage = "condominums_id Incompleta";
    }

    else if (this.employee.transaction_types_id == null || this.employee.transaction_types_id == null) {
      this.alertDisable = false;
      this.alertMessage = "transaction_types_id Incompleta";
    }
    else if (this.employee.customer_customer_id == null || this.employee.customer_customer_id == null) {
      this.alertDisable = false;
      this.alertMessage = "customer_customer_id Incompleta";
    }


    else {
      this.save();
    }
  }

  gotoList() {
    this.router.navigate(['payments-ar-list']);
  }

}