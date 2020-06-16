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
  
  employee: Departments = new Departments();
  submitted = false;

  constructor(private employeeService: DepartmentsService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Departments();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
        localStorage.setItem('token', "");
        this.router.navigate(['auth/signin']);
      });
    this.employee = new Departments();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['departments-list']);
  }
}