import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from "src/app/departments.service";
import { Departments } from "src/app/departments";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-departments',
  templateUrl: './update-departments.component.html',
  styleUrls: ['./update-departments.component.scss']
})
export class UpdateDepartmentsComponent implements OnInit {

  id: number;
  employee: Departments;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: DepartmentsService) { }

  ngOnInit() {
    this.employee = new Departments();


    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.departments_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.departments_status = (String(this.employee.departments_status) == "false") ? null:"false";
        console.log(this.employee.departments_status);
      }, error => {
        console.log(error);
        
      });
      
  }

  updateEmployee() {

    
    
    this.employee.last_update_by=3;
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
    this.router.navigate(['departments-list']);
  }


}
