import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/services/admin/rol';
import { Permissions } from 'src/app/services/admin/permissions';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from 'src/app/services/admin/rol.service';
import { PermissionsService } from 'src/app/services/admin/permissions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-permissions',
  templateUrl: './update-permissions.component.html',
  styleUrls: ['./update-permissions.component.scss']
})
export class UpdatePermissionsComponent implements OnInit {

 
  id: number;
  employee: Permissions;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  addresses: Observable<Rol[]>;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PermissionsService,
       private addressService: RolService
    
    
    ) { }

  ngOnInit() {

    this.employee = new Permissions();
    this.id = this.route.firstChild.snapshot.params['id']
    this.reloadDatas() ;
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.permissions_compras = (String(this.employee.permissions_compras) == "Inactivo") ? null:"Activo";
        this.employee.permissions_cxp = (String(this.employee.permissions_cxp) == "Inactivo") ? null:"Activo";
        this.employee.permissions_nomina = (String(this.employee.permissions_nomina) == "Inactivo") ? null:"Activo";
        this.employee.permissions_tesoreria = (String(this.employee.permissions_tesoreria) == "Inactivo") ? null:"Activo";
        this.employee.permissions_contabilidad = (String(this.employee.permissions_contabilidad) == "Inactivo") ? null:"Activo";
        this.employee.permissions_cxc = (String(this.employee.permissions_cxc) == "Inactivo") ? null:"Activo";
        this.employee.permissions_inventario = (String(this.employee.permissions_inventario) == "Inactivo") ? null:"Activo";
        this.employee.permissions_rh = (String(this.employee.permissions_rh) == "Inactivo") ? null:"Activo";
        this.employee.permissions_admin = (String(this.employee.permissions_admin) == "Inactivo") ? null:"Activo";
        this.employee.permissions_status = (String(this.employee.permissions_status) == "Inactivo") ? null:"Activo";



        
      }, error => {
        console.log(error);let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
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

  updateEmployee() {

    this.employee.userid="3";

    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo el permiso correctamente";
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

  onSubmit() {
    

    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.employee.permissions_description =="" ||  this.employee.permissions_description ==null ){
      this.alertDisable = false;
      this.alertMessage = "Descripción Incompleto";          
    }
    else if(this.employee.rol_id =="" ||  this.employee.rol_id ==null ){
      this.alertDisable = false;
      this.alertMessage = "Rol Incompleto";          
    }
  
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['rols-list']);
  }

}
