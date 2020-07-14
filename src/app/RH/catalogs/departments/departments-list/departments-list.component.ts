import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DepartmentsService } from "src/app/departments.service";
import { Departments } from "src/app/departments";
import { Router } from '@angular/router';

@Component({
  selector: "app-departments-list",
  templateUrl: "./departments-list.component.html",
  styleUrls: ["./departments-list.component.scss"]
})
export class DepartmentsListComponent implements OnInit {
  departments: Observable<Departments[]>;
  elements: any = [];

  constructor(private departmentService: DepartmentsService,
    private router: Router) {}

  ngOnInit() {    
    this.reloadData();
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

  deleteDepartment(id: number) {
    this.departmentService.deleteDepartment(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => {
          console.log(error);
         // localStorage.setItem('token', "");
         // this.router.navigate(['auth/signin']);
        });
  }

  departmentDetails(id: number){
    console.log(id);
    this.router.navigate(['departments-details', id]);
  }

  updateDepartment(id: number){
    console.log(id);
    this.router.navigate(['update-departments', id]);
  }
}