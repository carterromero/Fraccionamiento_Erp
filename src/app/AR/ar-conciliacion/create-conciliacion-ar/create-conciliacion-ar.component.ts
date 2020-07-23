import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conciliacionar } from 'src/app/conciliacion-ar';
import { ConciliacionARService } from 'src/app/Conciliacion-ar.service';
import { Collection } from 'src/app/Collection';
import { CollectionService } from 'src/app/collection.service';

import { BankAccountsService } from 'src/app/bank-accounts.service';
import { BankAccounts } from 'src/app/bankAccounts';

import { Observable, from } from 'rxjs';
@Component({
  selector: 'app-create-conciliacion-ar',
  templateUrl: './create-conciliacion-ar.component.html',
  styleUrls: ['./create-conciliacion-ar.component.scss']
})
export class CreateConciliacionARComponent implements OnInit {

  employee: Conciliacionar = new Conciliacionar();
  Collection: Observable<Collection[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(
    private employeeService: ConciliacionARService,
    private CollectionService: CollectionService,
    private router: Router) { }

  ngOnInit() {
    this.reloadDatas();
  }

  reloadDatas() {

    this.CollectionService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.Collection = this.CollectionService.getEmployeeList();
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
    this.employee = new Conciliacionar();
  }

  save() {

    /// this.employee.user_id="3";
    
    console.log( localStorage.getItem('condominums'));
    this.employee.concilitiation_condominums_id =Number( localStorage.getItem('condominums'));
    this.employee.concilitiation_origin="AR";
    this.employee.created_by = Number( localStorage.getItem('id'));

    
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages = "Se inserto la acredor correctamente";
        this.employee = new Conciliacionar();
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

    /* if (this.employee. == "" || this.employee.creditor_business_name == null) {
      this.alertDisable = false;
      this.alertMessage = "Nombre Incompleto";
    }

    else if (this.employee.creditor_addres == "" || this.employee.creditor_addres == null) {
      this.alertDisable = false;
      this.alertMessage = "Dirección Incompleta";
    }

    else if (this.employee.creditor_turn == "" || this.employee.creditor_turn == null) {
      this.alertDisable = false;
      this.alertMessage = "giro Incompleta";
    }


    else {
      this.save();
    } */
  }

  gotoList() {
    this.router.navigate(['collection-list']);
  }

}