import { Component, OnInit } from '@angular/core';
import { JournalslinService } from "../../../../services/gl/journalslin.service";
import { Journalslin } from "../../../../services/gl/journalslin";
import { PeriodsService } from "../../../../services/gl/periods.service";
import { Periods } from "../../../../services/gl/periods";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LinesService } from "src/app/services/gl/lines.service";
import { Lines } from "src/app/services/gl/lines"; 
import { JournalsService } from "../../../../services/gl/journals.service";
import { Journals } from "../../../../services/gl/journals";
@Component({
  selector: 'app-create-journalslin',
  templateUrl: './create-journalslin.component.html',
  styleUrls: ['./create-journalslin.component.scss']
})
export class CreateJournalslinComponent implements OnInit {


  employee: Journalslin = new Journalslin();
  Journalslin: Observable<Journalslin[]>
  periods: Observable<Periods[]>;
  purcharsess: Observable<Lines[]>;
  journa: Observable<Journals[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(
    private employeeService: JournalslinService,
    private periodsService: PeriodsService,
    private accountsService: LinesService,
    private jourService: JournalsService,
    private router: Router) { }

  ngOnInit() {
    this.reloadDatas();
    this.reloadDatasss();
  }

  newEmployee(): void {
    this.employee = new Journalslin();
  }

  reloadDatasss() 
  {

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
  reloadDatas() {
    this.jourService.getEmployeeList().subscribe(
      data => {
        this.journa = this.jourService.getEmployeeList();
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
  save() {

    this.employee.user_id = "3";
    this.employee.created_by=localStorage.getItem('id') ;
    
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
    
     
    
       if(this.employee.journals_header_id =="" ||  this.employee.journals_header_id ==null ){
        this.alertDisable = false;
        this.alertMessage = " polizas incompleta";          
      }
    
      if(this.employee.journals_lines_debe =="" ||  this.employee.journals_lines_debe ==null ){
        this.alertDisable = false;
        this.alertMessage = "debe incompleta ";          
      }
      if(this.employee.journals_lines_haber =="" ||  this.employee.journals_lines_haber ==null ){
        this.alertDisable = false;
        this.alertMessage = "haber incompleta ";          
      }
  
     
    
      else{
        this.save();    
      }
  }
  
  gotoList() {
    this.router.navigate(['journalslin-list']);
  }

}



