import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/departments.service';
import { Departments } from 'src/app/departments';
import { Router } from '@angular/router';
import { DepartmentsListComponent } from 'src/app/RH/catalogs/departments/departments-list/departments-list.component'
import { Observable } from 'rxjs';



@Component({
  selector: 'app-create-departments',
  templateUrl: './create-departments.component.html',
  styleUrls: ['./create-departments.component.scss']
})
export class CreateDepartmentsComponent implements OnInit {
  
  department: Departments = new Departments();
  departments: Observable<Departments[]>;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";



  constructor(private departmentService: DepartmentsService,
    private router: Router) {
     
     }

  ngOnInit() {
    //code
  }

  reloadData() {
    /*localStorage.setItem('token', "");*/
    /*this.employees = this.employeeService.getEmployeeList();*/
    this.departmentService.getDepartmentList().subscribe(
      data => {
        console.log(data);
        this.departments = this.departmentService.getDepartmentList();
      },
      error => {
        console.log(error);
        localStorage.setItem('token', "");
        this.router.navigate(['auth/signin']);     
      });
  }

  save() {
    this.department.last_update_by= 17;
    this.departmentService.createDepartment(this.department)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto el departamento";
          this.department= new Departments();
          this.gotoList();
        }, 
      error => {
        console.log(error);    
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = "No se puede agregar el nombre esta duplicado";
        }      
      });
  }

  onSubmit() {
    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.department.departments_name == "" ||  this.department.departments_name == null){
      this.alertDisable = false;
      this.alertMessage = "Departamento incompleto o repetido";          
    }

    else{
      this.save();    
    }
  }

  gotoList() {
    this.router.navigate(['departments-list']);
  }
}