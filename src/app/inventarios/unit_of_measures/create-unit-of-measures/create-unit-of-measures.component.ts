import { Component, OnInit } from '@angular/core';
import { UnitOfMeasures } from 'src/app/unit-of-measures';
import { UnitOfMeasuresService } from 'src/app/unit-of-measures.service ';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-unit-of-measures',
  templateUrl: './create-unit-of-measures.component.html',
  styleUrls: ['./create-unit-of-measures.component.scss']
})
export class CreateUnitOfMeasuresComponent implements OnInit {

 
  employee: UnitOfMeasures = new UnitOfMeasures();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: UnitOfMeasuresService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new UnitOfMeasures();
  }

  save() {
    this.employee.last_update_by=3;
    console.log(this.employee);
    


    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto la categoria correctamente";
          this.employee= new UnitOfMeasures();
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

  if(this.employee.of_measuares_description =="" ||  this.employee.of_measuares_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "Descripción Incompleto";          
  }
  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['unitof-measures-list']);
  }

}
