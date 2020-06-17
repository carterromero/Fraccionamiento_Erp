import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Departments } from 'src/app/departments';
import { DepartmentsService } from 'src/app/departments.service';
import { Workplaces } from 'src/app/workplaces';
import { WorkplacesService } from 'src/app/workplaces.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;
  departments: Observable<Departments[]>;
  workplaces: Observable<Workplaces[]>;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService,private departmentsService:DepartmentsService, private workplacesService:WorkplacesService) { }

  ngOnInit() {
    this.employee = new Employee();    
    //this.id = this.route.snapshot.params['id'];
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });
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
  list(){
    this.router.navigate(['employee']);
  }
}