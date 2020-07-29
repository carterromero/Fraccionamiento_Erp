import { Component, OnInit } from '@angular/core';
import { AccolintypeService } from "../../../../services/gl/accolintype.service";
import { Accolintype } from "../../../../services/gl/accolintype";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-accolintype',
  templateUrl: './create-accolintype.component.html',
  styleUrls: ['./create-accolintype.component.scss']
})
export class CreateAccolintypeComponent implements OnInit {

 
  employee: Accolintype = new Accolintype();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: AccolintypeService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new Accolintype();
  }

  save() {
    //this.employee.accounting_accounts_condominums_id = localStorage.getItem('condominums');
    this.employee.created_by = localStorage.getItem('id');      
   // this.employee.user_id="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto correctamente";
          this.employee= new Accolintype();
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

 

   if(this.employee.accounting_accounts_types_name =="" ||  this.employee.accounting_accounts_types_name ==null ){
    this.alertDisable = false;
    this.alertMessage = "nombre incompleta ";          
  }

  else if(this.employee.accounting_accounts_types_description =="" ||  this.employee.accounting_accounts_types_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "descripcion Incompleta";          
  }

  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['accolintype-list']);
  }

}
