import { Component, OnInit } from '@angular/core';
import { JournalslinService } from "../../../../services/gl/journalslin.service";
import { Journalslin } from "../../../../services/gl/journalslin";
import { PeriodsService } from "../../../../services/gl/periods.service";
import { Periods } from "../../../../services/gl/periods";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-journalslin',
  templateUrl: './create-journalslin.component.html',
  styleUrls: ['./create-journalslin.component.scss']
})
export class CreateJournalslinComponent implements OnInit {


  employee: Journalslin = new Journalslin();
  Journalslin: Observable<Journalslin[]>
  periods: Observable<Periods[]>;

  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(
    private employeeService: JournalslinService,
    private periodsService: PeriodsService,

    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new Journalslin();
  }

  reloadDatas() {

    this.employeeService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.Journalslin = this.employeeService.getEmployeeList();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];
        }
      }
    );
    this.periodsService.getPeriodsList().subscribe(
      data => {
        console.log(data);
        this.periods = this.periodsService.getPeriodsList();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];
        }
      });
  }
  save() {

    this.employee.user_id = "3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages = "Se inserto correctamente";
        this.employee = new Journalslin();
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




  }

  gotoList() {
    this.router.navigate(['journalslin-list']);
  }

}



