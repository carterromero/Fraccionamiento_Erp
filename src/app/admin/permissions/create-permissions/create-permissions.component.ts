import { Component, OnInit } from '@angular/core';
import { Permissions } from 'src/app/services/admin/permissions';
import { PermissionsService } from 'src/app/services/admin/permissions.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rol } from 'src/app/services/admin/rol';
import { RolService } from 'src/app/services/admin/rol.service';

@Component({
  selector: 'app-create-permissions',
  templateUrl: './create-permissions.component.html',
  styleUrls: ['./create-permissions.component.scss']
})
export class CreatePermissionsComponent implements OnInit {

  employee: Permissions = new Permissions();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  addresses: Observable<Rol[]>;

  constructor(private employeeService: PermissionsService,
    private router: Router,   private addressService: RolService) { }

  ngOnInit() {
    this.reloadDatas();
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

  save() {

    this.employee.userid="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se agrego el permiso correctamente";
          this.employee= new Permissions();
        }, 
      error => {
        console.log(error);    
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage ="Permiso duplicado";        
        }      
      });
  }

  onSubmit() 
  {

  this.alertDisable = true;
  this.alertDisables = true;

  if(this.employee.permissions_description =="" ||  this.employee.permissions_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "El Atributo Descripción es Obigatorio";          
  }
  else if(this.employee.rol_id =="" ||  this.employee.rol_id ==null ){
    this.alertDisable = false;
    this.alertMessage = "El Atributo Rol es Obigatorio";          
  }


 
  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['rols-list']);
  }
}
