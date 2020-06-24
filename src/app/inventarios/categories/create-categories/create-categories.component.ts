import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/categories';
import { CategoriesService } from 'src/app/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html'
  ,styleUrls: ['./create-categries.component.scss']
})

export class CreateCategoriesComponent implements OnInit {

  employee: Categories = new Categories();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: CategoriesService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new Categories();
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
          this.employee= new Categories();
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

  if(this.employee.categories_name =="" ||  this.employee.categories_name ==null ){
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