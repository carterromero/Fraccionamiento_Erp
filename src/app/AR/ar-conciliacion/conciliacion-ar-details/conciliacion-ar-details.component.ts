import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conciliacionar } from 'src/app/conciliacion-ar';
import { ConciliacionARService } from 'src/app/Conciliacion-ar.service';

import { Observable } from 'rxjs';
import { Billtopay } from 'src/app/billtopay';
import { Billtopayservice } from 'src/app/billtopay.service';
import { LinesService } from "src/app/services/gl/lines.service";
import { Lines } from "src/app/services/gl/lines";

@Component({
  selector: 'app-conciliacion-ar-details',
  templateUrl: './conciliacion-ar-details.component.html',
  styleUrls: ['./conciliacion-ar-details.component.scss']
})
export class ConciliacionARDetailsComponent implements OnInit {

  employee: Conciliacionar = new Conciliacionar();
  purcharse: Observable<Billtopay[]>;
  
  purcharsess: Observable<Lines[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: ConciliacionARService,
    private billtopayservice: Billtopayservice,
   
    private accountsService: LinesService,
    private router: Router) { }

    ngOnInit() {
      this.reloadDatas();
      
      this.reloadDatasss();
    }

    reloadDatas() 
    {
  
      this.billtopayservice.getEmployeeList().subscribe(
        data => {
          console.log(data);
          this.purcharse = this.billtopayservice.getEmployeeList();
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

    newEmployee(): void {
      this.employee = new Conciliacionar();
    }

    save() {

      //this.employee.user_id="3";
      this.employeeService.createEmployee(this.employee)
        .subscribe(data => 
          {
            console.log(data);
            this.alertDisables = false;
            this.alertMessages ="Se inserto  correctamente";
            this.employee= new Conciliacionar();
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

 onSubmit() 
  {

  this.alertDisable = true;
  this.alertDisables = true;

  if(this.employee.concilitiation_origin =="" ||  this.employee.concilitiation_origin ==null ){
    this.alertDisable = false;
    this.alertMessage = "Nombre Incompleto";          
  }



  else{
    this.save();    
  }
 }

  gotoList() 
  {
    this.router.navigate(['conciliacion-ar-list']);
  }

}