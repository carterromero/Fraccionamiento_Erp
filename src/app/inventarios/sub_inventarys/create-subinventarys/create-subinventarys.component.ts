import { Component, OnInit } from '@angular/core';
import { SubInventarys } from 'src/app/subinventarys';
import { SubInventarysService } from 'src/app/subinventarys.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-subinventarys',
  templateUrl: './create-subinventarys.component.html',
  styleUrls: ['./create-subinventarys.component.scss']
})
export class CreateSubinventarysComponent implements OnInit {

  employee: SubInventarys = new SubInventarys();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: SubInventarysService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new SubInventarys();
  }

  save() {
    this.employee.last_update_by=3;
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto la categoria correctamente";
          this.employee= new SubInventarys();
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

  if(this.employee.sub_inventarys_description =="" ||  this.employee.sub_inventarys_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "Nombre Incompleto";          
  }
  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['categories-list']);
  }

}
