import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  id: number;
  employee: Customer;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private route: ActivatedRoute, private router: Router,
    private employeeService: CustomerService) { }

  ngOnInit() {

    this.employee = new Customer();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.customer_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.customer_status = (String(this.employee.customer_status) == "false") ? null : "false";
        console.log(this.employee.customer_status);
      }, error => {
        console.log(error); let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];
        }

      });
  }



  updateEmployee() {

    //this.employee.cutomer_customer_id = 3;
    console.log(this.employee.customer_status);

    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages = "Se actualizo el cliente correctamente";
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

    if (this.employee.customer_customer_name == "" || this.employee.customer_customer_name == null) {
      this.alertDisable = false;
      this.alertMessage = "Nombre Incompleto";
    }

    else if (this.employee.customer_address == "" || this.employee.customer_address == null) {
      this.alertDisable = false;
      this.alertMessage = "Dirección Incompleta";
    }

    else if (this.employee.customer_customer_type == "" || this.employee.customer_customer_type == null) {
      this.alertDisable = false;
      this.alertMessage = "Tipo Incompleta";
    }


    else if (this.employee.customer_customer_rfc == "" || this.employee.customer_customer_rfc == null) {
      this.alertDisable = false;
      this.alertMessage = "RFC Incompleta";
    }

    else if (this.employee.customer_phone == null || this.employee.customer_phone == null) {
      this.alertDisable = false;
      this.alertMessage = "Registro telefono Incompleta";
    }

    else if (this.employee.customer_email == "" || this.employee.customer_email == null) {
      this.alertDisable = false;
      this.alertMessage = "Email Incompleta";
    }
    else if (this.employee.condominums_id == null || this.employee.condominums_id == null) {
      this.alertDisable = false;
      this.alertMessage = "Condominios Incompleta";
    }


    else {
      this.updateEmployee();
    }


  }

  gotoList() {
    this.router.navigate(['customer-list']);
  }

}
