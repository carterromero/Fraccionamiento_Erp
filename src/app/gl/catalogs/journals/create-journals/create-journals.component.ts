import { Component, OnInit } from '@angular/core';
import { JournalsService } from "../../../../services/gl/journals.service";
import { Journals } from "../../../../services/gl/journals";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-journals',
  templateUrl: './create-journals.component.html',
  styleUrls: ['./create-journals.component.scss']
})
export class CreateJournalsComponent implements OnInit {


  employee: Journals = new Journals();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: JournalsService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new Journals();
  }

  save() {

    this.employee.user_id="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto correctamente";
          this.employee= new Journals();
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

 

   if(this.employee.journals_date =="" ||  this.employee.journals_date ==null ){
    this.alertDisable = false;
    this.alertMessage = "fecha incompleta ";          
  }

  else if(this.employee.journals_description =="" ||  this.employee.journals_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "descripcion Incompleta";          
  }
  else if(this.employee.journals_currency_code =="" ||  this.employee.journals_currency_code ==null ){
    this.alertDisable = false;
    this.alertMessage = "codigo moneda Incompleta";          
  }
 
 

  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['journals-list']);
  }

}

