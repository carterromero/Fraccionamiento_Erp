import { Component, OnInit } from '@angular/core';
import { PaymentsAR } from 'src/app/payments-ar';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentsARService } from 'src/app/payments-ar.service';

import { TransactionTypes } from 'src/app/transaction-types';
import { TransactionTypesService } from 'src/app/transaction-types.service';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';
import { DepositAccount } from 'src/app/depositAccount';
import { DepositAccountService } from 'src/app/deposit-account.service';
import { Collection } from 'src/app/collection';
import { CollectionService } from 'src/app/collection.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-update-payments-ar',
  templateUrl: './update-payments-ar.component.html',
  styleUrls: ['./update-payments-ar.component.scss']
})
export class UpdatePaymentsARComponent implements OnInit {

  id: number;
  employee: PaymentsAR;
  transactionTypes: Observable<TransactionTypes[]>
  customer: Observable<Customer[]>
  depositaccount: Observable<DepositAccount[]>
  collection: Observable<Collection[]>
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(
    private route: ActivatedRoute,
    private TransactionTypesService: TransactionTypesService,
    private CustomerService: CustomerService,
    private DepositAccountService: DepositAccountService,
    private CollectionService: CollectionService,
    private router: Router,
    private employeeService: PaymentsARService) { }

  ngOnInit() {
    this.reloadDatas();

    this.employee = new PaymentsAR();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.payments_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.payments_status = (String(this.employee.payments_status) == "false") ? null : "false";
        console.log(this.employee.payments_status);
      }, error => {
        console.log(error); let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];
        }

      });
  }
  reloadDatas() {
    this.TransactionTypesService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.transactionTypes = this.TransactionTypesService.getEmployeeList();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];
        }
      }
    );
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
    this.DepositAccountService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.depositaccount = this.DepositAccountService.getEmployeeList();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];
        }
      }
    );
    this.CollectionService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.collection = this.CollectionService.getEmployeeList();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];
        }
      }
    );
  }



  updateEmployee() {

    //this.employee.userid="3";
    console.log(this.employee.payments_status);

    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages = "Se actualizo la empresa correctamente";
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

    else if (this.employee.created_by == null || this.employee.created_by == null) {
      this.alertDisable = false;
      this.alertMessage = "created_by Incompleta";
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
      this.updateEmployee();
    }


  }

  gotoList() {
    this.router.navigate(['payments-ar-list']);
  }

}
