import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})

export class CreateCustomerComponent implements OnInit {

  employee: Customer = new Customer();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: CustomerService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new Customer();
  }

  save() {

    this.employee.cutomer_customer_id = 3;
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages = "Se inserto el cliente correctamente";
        this.employee = new Customer();
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

    if (this.employee.customer_customer_name == "" || this.employee.customer_customer_name == null || this.employee.customer_customer_name==this.employee.customer_customer_name) {
      this.alertDisable = false;
      this.alertMessage = "Nombre Incompleto";
    }
    else if (this.employee.customer_customer_rfc == "" || this.employee.customer_customer_rfc == null || this.employee.customer_customer_rfc==this.employee.customer_customer_rfc ) {
      this.alertDisable = false;
      this.alertMessage = "RFC Incompleta";
    }

    else if (this.employee.customer_customer_type == "" || this.employee.customer_customer_type == null) {
      this.alertDisable = false;
      this.alertMessage = "Tipo incompleto";
    }

    else if (this.employee.customer_address == "" || this.employee.customer_address == null) {
      this.alertDisable = false;
      this.alertMessage = "Dirección Incompleta";
    }

    else if (this.employee.customer_phone == null || this.employee.customer_phone == null) {
      this.alertDisable = false;
      this.alertMessage = "Registro Patronal Incompleta";
    }

    else if (this.employee.customer_email == "" || this.employee.customer_email == null) {
      this.alertDisable = false;
      this.alertMessage = "Email Incompleta";
    }
    else if (this.employee.condominums_id == null || this.employee.condominums_id == null) {
      this.alertDisable = false;
      this.alertMessage = "condomi Incompleta";
    }

    else {
      this.save();
    }
  }

  gotoList() {
    this.router.navigate(['customer-list']);
  }

}