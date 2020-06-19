import { Component, OnInit } from '@angular/core';
import { UserDashboard } from 'src/app/services/admin/userdashboard';
import { Observable } from 'rxjs';
import { TypeUser } from 'src/app/services/admin/typeuser';
import { TenantsC } from 'src/app/services/admin/tenants';
import { Router, ActivatedRoute } from '@angular/router';
import { UserdashboardngService } from 'src/app/services/admin/userdashboardng.service';
import { TypeuserService } from 'src/app/services/admin/typeuser.service';

@Component({
  selector: 'app-update-userdashboard',
  templateUrl: './update-userdashboard.component.html',
  styleUrls: ['./update-userdashboard.component.scss']
})
export class UpdateUserdashboardComponent implements OnInit {

  id: number;
  employee: UserDashboard;
  typeuser: Observable<TypeUser[]>;
  tenan: Observable<TenantsC[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: UserdashboardngService ,
    private addressService: TypeuserService
    
    ) { }

  ngOnInit() {

    this.employee = new UserDashboard;
    this.id = this.route.firstChild.snapshot.params['id']
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => 
        {
        console.log(data);
        this.employee = data;
        },
       error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }

      });
      this.reloadDatas() ;
      this.reloadDatass() ;
  }

   

  updateEmployee() 
  {

    this.employee.userid="3";
    console.log(this.employee)
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo la asignacion de dashboard correctamente";  
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

  reloadDatas() 
  {

    this.addressService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.typeuser = this.addressService.getEmployeeListcombo();
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


  reloadDatass() 
  {

    this.employeeService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.tenan = this.employeeService.getEmployeeListcombo();
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

  onSubmit() {
    this.alertDisable = true;
    this.alertDisables = true;
  
    this.alertDisable = true;
  this.alertDisables = true;
  if(this.employee.typeuser_id =="" ||  this.employee.typeuser_id ==null ){
    this.alertDisable = false;
    this.alertMessage = "Tipo de Usuario Incompleto";          
  }
  else if(this.employee.tenants_id =="" ||  this.employee.tenants_id ==null ){
    this.alertDisable = false;
    this.alertMessage = "Residente Incompleta";          
  }
  else{
      this.updateEmployee();    
  }
    
  }

  gotoList() {
    this.router.navigate(['userd-list',this.employee.user_id]);
  }

}
