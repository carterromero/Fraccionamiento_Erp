import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/admin/user.service';
import { Condominums } from 'src/app/services/admin/condominums';
import { Rol } from 'src/app/services/admin/rol';
import { User } from 'src/app/services/admin/user';
import { Observable } from 'rxjs';
import { RolService } from 'src/app/services/admin/rol.service';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  id: number;
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
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit() {

    this.employee = new User();
    this.id = this.route.firstChild.snapshot.params['id']
    this.reloadDatas();
    this.reloadDatasss();
    this.employeeService.getEmployee(this.id)
      .subscribe(data => 
        {
        console.log(data);
        this.employee = data;
        this.employee.user_status = (String(this.employee.user_status) == "false") ? null:"true";
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

  updateEmployee() 
  {

    this.employee.userid="3";
    console.log(this.employee)
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo la empresa correctamente";  
      }, 
      error => 
      {
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
  
    if(this.employee.user_name =="" ||  this.employee.user_name ==null ){
      this.alertDisable = false;
      this.alertMessage = "Nombre Incompleto";          
    }
  
    else if(this.employee.user_password =="" ||  this.employee.user_password ==null ){
      this.alertDisable = false;
      this.alertMessage = "Dirección Incompleta";          
    }

    else if(this.employee.user_email =="" ||  this.employee.user_email ==null ){
      this.alertDisable = false;
      this.alertMessage = "Dirección Incompleta";          
    }
    else if(this.employee.condominums_id =="" ||  this.employee.condominums_id ==null ){
      this.alertDisable = false;
      this.alertMessage = "Dirección Incompleta";          
    }
    else if(this.employee.rol_id =="" ||  this.employee.rol_id ==null ){
      this.alertDisable = false;
      this.alertMessage = "Dirección Incompleta";          
    }
  
    else{
      this.updateEmployee();    
    }
  }

}
