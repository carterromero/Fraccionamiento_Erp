import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { JournalslinService } from "../../../../services/gl/journalslin.service";
import { Journalslin } from "../../../../services/gl/journalslin";
import { PeriodsService } from "../../../../services/gl/periods.service";
import { Periods } from "../../../../services/gl/periods";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-update-journalslin',
  templateUrl: './update-journalslin.component.html',
  styleUrls: ['./update-journalslin.component.scss']
})
export class UpdateJournalslinComponent implements OnInit {

 
  p_id: number;
  employee: Journalslin;
  Journalslin: Observable<Journalslin[]>
  periods: Observable<Periods[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(
    private route: ActivatedRoute,
    private periodsService: PeriodsService,
    private router: Router,
    private employeeService: JournalslinService) { }

  ngOnInit() {
this.reloadDatas();
    this.employee = new Journalslin();
    this.p_id = this.route.firstChild.snapshot.params['p_id']
    console.log(this.employee.journals_lines_status);
    this.employeeService.getEmployee(this.p_id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.journals_lines_status = (String(this.employee.journals_lines_status) == "false") ? null:"false";
        console.log(this.employee.journals_lines_status);
      }, error => {
        console.log(error);let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
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

   

  updateEmployee() {

    this.employee.user_id="3";
    this.employee.created_by=localStorage.getItem('id');
    this.employee.last_updated_by=localStorage.getItem('id');
    console.log(this.employee.journals_lines_status);
    
    this.employeeService.updateEmployee(this.p_id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo  correctamente";
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
