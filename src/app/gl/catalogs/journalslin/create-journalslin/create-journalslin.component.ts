import { Component, OnInit } from '@angular/core';
import { JournalslinService } from "../../../../services/gl/journalslin.service";
import { Journalslin } from "../../../../services/gl/journalslin";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-journalslin',
  templateUrl: './create-journalslin.component.html',
  styleUrls: ['./create-journalslin.component.scss']
})
export class CreateJournalslinComponent implements OnInit {


  employee: Journalslin = new Journalslin();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: JournalslinService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new Journalslin();
  }

  save() {

    this.employee.user_id="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto correctamente";
          this.employee= new Journalslin();
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

 

  
  }

  gotoList() 
  {
    this.router.navigate(['journalslin-list']);
  }

}



