import { Component, OnInit } from '@angular/core';
import {EmployeeService } from "src/app/employee.service";
import { Employee } from "src/app/employee";
import { Router, ActivatedRoute } from '@angular/router';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Departments } from 'src/app/departments';
import { DepartmentsService } from 'src/app/departments.service';
import { Workplaces } from 'src/app/workplaces';
import { WorkplacesService } from 'src/app/workplaces.service';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
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
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService, private departmentsService: DepartmentsService, private workplacesService: WorkplacesService,
    private condominumsService: CondominumsService) { }

    handleUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      
      reader.readAsDataURL(file);
      reader.onload = () => {
          this.datos = reader.result.toString();
          this.employee.employees_cv = this.datos.replace("data:application/pdf;base64,","")
          event = this.employee.employees_cv;
        /*  this.employee.employees_contract = this.datos.replace("data:application/pdf;base64,","")*/
         // event = this.employee.employees_cv;
        //  event = this.employee.employees_contract;
       
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

  ngOnInit() {
    this.reloadDatas();
    this.reloadDatas2();
    this.reloadDatas3();
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
  reloadDatas() 
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
  }
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

  updateEmployee() {
    //this.employee.=3;
 
    console.log(this.employee);
    console.log(this.id);
    
    this.employee.last_update_by = Number(localStorage.getItem('id'));
    this.employee.condominums_id = Number(localStorage.getItem('condonminums'));
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
