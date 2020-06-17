import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeService } from "src/app/employee.service";
import { Employee } from "src/app/employee";
import { Router } from '@angular/router';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  elements: any = [];

  constructor(private employeeService: EmployeeService,
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
          localStorage.setItem('token', "");
          this.router.navigate(['auth/signin']);
        });
  }

  employeeDetails(id: number){
    console.log(id);
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    console.log(id);
    this.router.navigate(['update-employee', id]);
  }
}