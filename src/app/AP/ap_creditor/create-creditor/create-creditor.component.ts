import { Component, OnInit } from '@angular/core';
import { Creditor } from 'src/app/creditor';
import { CreditorService } from 'src/app/creditor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-creditor',
  templateUrl: './create-creditor.component.html',
  styleUrls: ['./create-creditor.component.scss']
})
export class CreateCreditorComponent implements OnInit {
 
  employee: Creditor = new Creditor();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: CreditorService,
    private router: Router) { }

    ngOnInit() {
    }

    newEmployee(): void {
      this.employee = new Creditor();
    }

    save() {

      this.employee.user_id="3";
      this.employeeService.createEmployee(this.employee)
        .subscribe(data => 
          {
            console.log(data);
            this.alertDisables = false;
            this.alertMessages ="Se inserto la acredor correctamente";
            this.employee= new Creditor();
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

  if(this.employee.creditor_business_name =="" ||  this.employee.creditor_business_name ==null ){
    this.alertDisable = false;
    this.alertMessage = "Nombre Incompleto";          
  }

  else if(this.employee.creditor_addres =="" ||  this.employee.creditor_addres ==null ){
    this.alertDisable = false;
    this.alertMessage = "Dirección Incompleta";          
  }

  else if(this.employee.creditor_turn =="" ||  this.employee.creditor_turn ==null ){
    this.alertDisable = false;
    this.alertMessage = "giro Incompleta";          
  }


  else{
    this.save();    
  }
 }

  gotoList() 
  {
    this.router.navigate(['creditor-list']);
  }

}