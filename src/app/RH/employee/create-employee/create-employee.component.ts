import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee';
import { Departments } from 'src/app/departments';
import { DepartmentsService } from 'src/app/departments.service';
import { Workplaces } from 'src/app/workplaces';
import { WorkplacesService } from 'src/app/workplaces.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  
  employee: Employee = new Employee();
  submitted = false;
  departments: Observable<Departments[]>;
  workplaces: Observable<Workplaces[]>;
  
  constructor(private employeeService: EmployeeService, private router: Router,private departmentsService:DepartmentsService, private workplacesService:WorkplacesService   ) { }

  ngOnInit() {
    //code
  }
  reloadData() 
  {
    this.departmentsService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.departments = this.departmentsService.getEmployeeList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      }
    );      
  }

  reloadDatas() 
  {

    this.workplacesService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.workplaces = this.workplacesService.getEmployeeList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      }
    );      
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
       // localStorage.setItem('token', "");
      //  this.router.navigate(['auth/signin']);
      });
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['employee-list']);
  }
}