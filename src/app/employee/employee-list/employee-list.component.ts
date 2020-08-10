import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeService } from "../../employee.service";
import { Employee } from "../../employee";
import { Router } from '@angular/router';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  employee : Employee = new Employee();
  elements: any = [];

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {    
    this.reloadData();
  }

  reloadData() {
    /*localStorage.setItem('token', "");*/
    /*this.employees = this.employeeService.getEmployeeList();*/
    this.employeeService.getEmployeeList().subscribe(
      data => {
        console.log(data);      
        console.log(this.employee.employees_status);
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