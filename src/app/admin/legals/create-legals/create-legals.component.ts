import { Component, OnInit } from '@angular/core';
import { Legals } from 'src/app/services/admin/legals';
import { LegalsService } from 'src/app/services/admin/legals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-legals',
  templateUrl: './create-legals.component.html',
  styleUrls: ['./create-legals.component.scss']
})

export class CreateLegalsComponent implements OnInit {

  employee: Legals = new Legals();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: LegalsService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new Legals();
  }

  save() {

    this.employee.userid="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto la empresa correctamente";
          this.employee= new Legals();
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

  if(this.employee.legals_name =="" ||  this.employee.legals_name ==null ){
    this.alertDisable = false;
    this.alertMessage = "Nombre Incompleto";          
  }

  else if(this.employee.legals_address =="" ||  this.employee.legals_address ==null ){
    this.alertDisable = false;
    this.alertMessage = "Dirección Incompleta";          
  }

  else if(this.employee.legals_description =="" ||  this.employee.legals_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "Descripción Incompleta";          
  }


  else if(this.employee.legals_rfc =="" ||  this.employee.legals_rfc ==null ){
    this.alertDisable = false;
    this.alertMessage = "RFC Incompleta";          
  }

  else if(this.employee.legals_employer_registration =="" ||  this.employee.legals_employer_registration ==null ){
    this.alertDisable = false;
    this.alertMessage = "Registro Patronal Incompleta";          
  }

  else if(this.employee.legals_tax_regime =="" ||  this.employee.legals_tax_regime ==null ){
    this.alertDisable = false;
    this.alertMessage = "Regimen Fiscal Incompleta";          
  }


  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['legals-list']);
  }

}