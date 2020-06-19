import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from 'src/app/services/admin/rol';
import { UserService } from 'src/app/services/admin/user.service';
import { RolService } from 'src/app/services/admin/rol.service';
import { Router } from '@angular/router';
import { User } from 'src/app/services/admin/user';
import { TenantsC } from 'src/app/services/admin/tenants';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class CreateUserComponent implements OnInit {

  employee: User = new User();
  submitted = false;
  addresses: Observable<Rol[]>;
  condominus: Observable<Condominums[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: UserService,
    private addressService: RolService,
    private condService : CondominumsService,
    private router: Router) { }


  ngOnInit() {
   this.reloadDatas();
   this.reloadDatasss();
  
  }

  reloadDatas() 
  {

    this.addressService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.addresses = this.addressService.getEmployeeListcombo();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }

  reloadDatasss() 
  {
    this.condService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.condominus = this.condService.getEmployeeListcombo();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }

  save()
   {
    this.employee.userid="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto el usuario correctamente";
          this.employee  = new User();
        }, 
      error => {
        console.log(error);  
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }    
      });
  }

  onSubmit() 
  {
  this.alertDisable = true;
  this.alertDisables = true;
  if(this.employee.user_name=="" ||  this.employee.user_name ==null )
  {
    this.alertDisable = false;
    this.alertMessage = "Nombre Incompleto";          
  }
  else if(this.employee.user_password =="" ||  this.employee.user_password ==null ){
    this.alertDisable = false;
    this.alertMessage = "Contraseña Incompleta";          
  }
  else if(this.employee.user_email =="" ||  this.employee.user_email ==null ){
    this.alertDisable = false;
    this.alertMessage = "Email Incompleto";          
  }

  else if(this.employee.condominums_id =="" ||  this.employee.condominums_id ==null ){
    this.alertDisable = false;
    this.alertMessage = "Fraccionamiento Incompleto";          
  }
  else if(this.employee.rol_id =="" ||  this.employee.rol_id ==null ){
    this.alertDisable = false;
    this.alertMessage = "Rol Incompleto";          
  }
  else
  {
    this.save();    
  } 
  }

  gotoList()
  {
    this.router.navigate(['usuarios-list']);
  }

}
