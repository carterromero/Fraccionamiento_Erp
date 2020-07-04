import { Component, OnInit } from '@angular/core';
import {EmployeeService } from "src/app/employee.service";
import { Employee } from "src/app/employee";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();


    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.employees_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.employees_status = (String(this.employee.employees_status) == "false") ? null:"false";
        console.log(this.employee.employees_status);
      }, error => {
        console.log(error);
        
      });
      
  }

  updateEmployee() {
    //this.employee.=3;
    console.log(this.employee.employees_cv.toString());
    console.log(this.employee);
    console.log(this.id);
    
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {console.log(data);
        this.gotoList();  
      }, 
      error => {
        console.log(error);
        
      });
    
  
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['employee-list']);
  }


}
