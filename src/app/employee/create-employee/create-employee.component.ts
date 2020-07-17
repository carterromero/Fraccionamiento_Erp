import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { Router } from '@angular/router';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Departments } from 'src/app/departments';
import { DepartmentsService } from 'src/app/departments.service';
import { Workplaces } from 'src/app/workplaces';
import { WorkplacesService } from 'src/app/workplaces.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/admin/user';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  authentication: User = new User();  
  employee: Employee = new Employee();
  condominums: Observable<Condominums[]>;
  departments: Observable<Departments[]>;
  workplaces: Observable<Workplaces[]>;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos:String;
  dato:String;

  constructor(private employeeService: EmployeeService, 
    private departmentsService: DepartmentsService, 
    private workplacesService: WorkplacesService,
    private condominumsService: CondominumsService,
     private router: Router) { 
    
    }

  ngOnInit() {
    //code
    //this.reloadDatas();
    this.reloadDatas2();
    this.reloadDatas3();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();

  }

 /* reloadDatas() 
  {

    this.condominumsService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.condominums = this.condominumsService.getEmployeeListcombo();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }*/
  reloadDatas2() 
  {

    this.departmentsService.getDepartmentList().subscribe(
      data => {
        console.log(data);
        this.departments = this.departmentsService.getDepartmentList();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }
  reloadDatas3() 
  {

    this.workplacesService.getWorkplaceList().subscribe(
      data => {
        console.log(data);
        this.workplaces = this.workplacesService.getWorkplaceList();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.datos = reader.result.toString();
        this.employee.employees_cv = this.datos.replace("data:application/pdf;base64,","")
      /*  this.employee.employees_contract = this.datos.replace("data:application/pdf;base64,","")*/
        event = this.employee.employees_cv;
      /*  event = this.employee.employees_contract*/
     
    };
}

handleUpload2(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.readAsDataURL(file);
  reader.onload = () => {
      this.dato = reader.result.toString();
      this.employee.employees_contract = this.dato.replace("data:application/pdf;base64,","")
    /*  this.employee.employees_contract = this.datos.replace("data:application/pdf;base64,","")*/
      event = this.employee.employees_contract;
    /*  event = this.employee.employees_contract*/
   
  };
}
  save(){
    this.employee.create_by = Number(localStorage.getItem('id'));
    this.employee.condominums_id = Number(localStorage.getItem('condonminums'));
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
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