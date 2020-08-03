import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { Router } from '@angular/router';
import { Condominums } from 'src/app/services/admin/condominums';
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
    this.employee.condominums_id = Number(localStorage.getItem('condominums'));
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

    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.employee.employees_name == "" ||  this.employee.employees_name == null){
      this.alertDisable = false;
      this.alertMessage = "Nombre del empleado incompleto";          
    }
    if(this.employee.employees_father_surname == "" ||  this.employee.employees_father_surname == null){
      this.alertDisable = false;
      this.alertMessage = "Apellido paterno del empleado incompleto";          
    }
    if(this.employee.employees_mother_surname == "" ||  this.employee.employees_mother_surname == null){
      this.alertDisable = false;
      this.alertMessage = "Apellido materno del empleado incompleto";          
    }
    if(this.employee.employees_address == "" ||  this.employee.employees_address == null){
      this.alertDisable = false;
      this.alertMessage = "Dirección del empleado incompleto";          
    }
    if(this.employee.employees_telephone == "" ||  this.employee.employees_telephone == null){
      this.alertDisable = false;
      this.alertMessage = "Teléfono del empleado incompleto";          
    }
    if(this.employee.employees_email == "" ||  this.employee.employees_email == null){
      this.alertDisable = false;
      this.alertMessage = "Correo del empleado incompleto";          
    }
    if(this.employee.employees_cv == "" ||  this.employee.employees_cv == null){
      this.alertDisable = false;
      this.alertMessage = "No subió el cv del empleado";          
    }
    if(this.employee.employees_contract == "" ||  this.employee.employees_contract == null){
      this.alertDisable = false;
      this.alertMessage = "No subio el contrato del empleado";          
    }
    if(this.employee.employees_nss == "" ||  this.employee.employees_nss == null){
      this.alertDisable = false;
      this.alertMessage = "NSS del empleado incompleto";          
    }
    if(this.employee.employees_rfc == "" ||  this.employee.employees_rfc == null){
      this.alertDisable = false;
      this.alertMessage = "RFC del empleado incompleto";          
    }
    if(this.employee.employees_curp == "" ||  this.employee.employees_curp == null){
      this.alertDisable = false;
      this.alertMessage = "CURP del empleado incompleto";          
    }
    if(this.employee.departments_id == 0 ||  this.employee.departments_id == null){
      this.alertDisable = false;
      this.alertMessage = "No se agrego el departamento al que pertenece el empleado";          
    }
    if(this.employee.workplaces_id == 0 ||  this.employee.workplaces_id == null){
      this.alertDisable = false;
      this.alertMessage = "No se agrego el puesto al que pertenece el empleado";          
    }
    if(this.employee.employees_fractionation_unit == "" ||  this.employee.employees_fractionation_unit == null){
      this.alertDisable = false;
      this.alertMessage = "No hay unidad del fraccinamiento al que pertence el empleado";          
    }
    if(this.employee.employees_work_start_date == null){
      this.alertDisable = false;
      this.alertMessage = "No hay fecha de inicio de trabajo del empleado";          
    }
    if( this.employee.employees_work_end_date == null){
      this.alertDisable = false;
      this.alertMessage = "No hay fecha de fin de trabajo del empleado";          
    }
    if(this.employee.employees_working_days == "" ||  this.employee.employees_working_days == null){
      this.alertDisable = false;
      this.alertMessage = "No se han agregado los días de trabajo";          
    }
    if(this.employee.employees_working_hours_start == "" ||  this.employee.employees_working_hours_start == null){
      this.alertDisable = false;
      this.alertMessage = "Agregar hora de inicio del trabajo";          
    }
    if(this.employee.employees_working_hours_end == "" ||  this.employee.employees_working_hours_end == null){
      this.alertDisable = false;
      this.alertMessage = "Agregar hora de fin del trabajo";          
    }
    if(this.employee.employees_bank == "" ||  this.employee.employees_bank == null){
      this.alertDisable = false;
      this.alertMessage = "No se ha agregado el banco del empleado";          
    }
    if(this.employee.employees_bank_account == "" ||  this.employee.employees_bank_account == null){
      this.alertDisable = false;
      this.alertMessage = "No se ha agregado la cuenta de banco";          
    }
    else{
      this.save();    
    }
  }

  gotoList() {
    this.router.navigate(['employee-list']);
  }
}