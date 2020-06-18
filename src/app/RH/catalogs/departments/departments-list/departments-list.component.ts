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
  employees: Observable<Departments[]>;
  elements: any = [];

  constructor(private employeeService: DepartmentsService,
    private router: Router) {}

  ngOnInit() {    
    this.reloadData();

    for (let i = 1; i <= 11; i++) {
      this.elements.push({
        id: i,
        first: {nick: 'Nick ' + i, name: 'Name ' + i},
        last: 'Name ' + i,
        handle: 'Handle ' + i
      });
    }
  }

  reloadData() {
    /*localStorage.setItem('token', "");*/
    /*this.employees = this.employeeService.getEmployeeList();*/
    this.employeeService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.employees = this.employeeService.getEmployeeList();
      },
      error => {
        console.log(error);
        localStorage.setItem('token', "");
        this.router.navigate(['auth/signin']);     
      });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
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

  employeeDetails(id: number){
    console.log(id);
    this.router.navigate(['departments-details', id]);
  }

  updateEmployee(id: number){
    console.log(id);
    this.router.navigate(['update-departments', id]);
  }
}