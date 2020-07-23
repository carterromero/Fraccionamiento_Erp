import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conciliacion } from 'src/app/conciliacion';
import { Observable } from 'rxjs';
import { ConciliacionService } from 'src/app/conciliacion.service';
import { PaymentRecord } from 'src/app/payment-record';
import { PaymentRecordService } from 'src/app/payment-record.service';

import { LinesService } from "src/app/services/gl/lines.service";
import { Lines } from "src/app/services/gl/lines";

@Component({
  selector: 'app-create-conciliacion-ar',
  templateUrl: './create-conciliacion-ar.component.html',
  styleUrls: ['./create-conciliacion-ar.component.scss']
})
export class CreateConciliacionARComponent implements OnInit {


  employee: Conciliacion = new Conciliacion();
  purcharses: Observable<PaymentRecord[]>;
  purcharsess: Observable<Lines[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(
    private employeeService: ConciliacionService,
    private paymentRecordService: PaymentRecordService,
    private accountsService: LinesService,
    private router: Router) { }

  ngOnInit() {

    this.reloadDatas();
  }


  reloadDatas() {

    this.paymentRecordService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.purcharses = this.paymentRecordService.getEmployeeList();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];
        }
      }
    );
    this.accountsService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.purcharsess = this.accountsService.getEmployeeList();
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

  newEmployee(): void {
    this.employee = new Conciliacion();
  }

  save() {

    this.employeeService.createEmployee(this.employee)
    this.employee.concilitiation_condominums_id = localStorage.getItem('condominums');
    this.employee.concilitiation_document_type="Poliza";
    this.employee.created_by=Number(localStorage.getItem('id'));
    this.employee.concilitiation_origin="AR";

    this.employeeService.createEmployee(this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages = "Se inserto  correctamente";
        this.employee = new Conciliacion();
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

    if (this.employee.concilitiation_origin == "" || this.employee.concilitiation_origin == null) {
      this.alertDisable = false;
      this.alertMessage = "Nombre Incompleto";
    }



    else {
      this.save();
    }
  }

  gotoList() {
    this.router.navigate(['conciliacionp-list']);
  }

}