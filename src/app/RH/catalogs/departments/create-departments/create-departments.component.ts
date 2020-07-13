import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/departments.service';
import { Departments } from 'src/app/departments';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-departments',
  templateUrl: './create-departments.component.html',
  styleUrls: ['./create-departments.component.scss']
})
export class CreateDepartmentsComponent implements OnInit {
  
  department: Departments = new Departments();
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private departmentService: DepartmentsService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.department = new Departments();
  }

  save() {
    this.departmentService.createDepartment(this.department)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
       // localStorage.setItem('token', "");
     //   this.router.navigate(['auth/signin']);
      });
    this.department = new Departments();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.alertDisable = true;
    this.alertDisables = true;
    
    if(this.department.departments_name =="" ||  this.department.departments_name ==null ){
      this.alertDisable = false;
      this.alertMessage = "Agregar nombre de departamento";          
    }
    else if(this.department.departments_status =='' ||  this.department.departments_status ==null ){
      this.alertDisable = false;
      this.alertMessage = "Agregar estatus";          
    }
    else{
      this.save();    
    }
  }

  gotoList() {
    this.router.navigate(['departments-list']);
  }
}