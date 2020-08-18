import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeUser } from 'src/app/services/admin/typeuser';
import { TenantsC } from 'src/app/services/admin/tenants';
import { UserDashboard } from 'src/app/services/admin/userdashboard';
import { UserdashboardngService } from 'src/app/services/admin/userdashboardng.service';
import { TypeuserService } from 'src/app/services/admin/typeuser.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-userdashboard',
  templateUrl: './create-userdashboard.component.html',
  styleUrls: ['./create-userdashboard.component.scss']
})
export class CreateUserdashboardComponent implements OnInit {
  id: number;
  employee: UserDashboard = new UserDashboard();
  submitted = false;
  typeuser: Observable<TypeUser[]>;
  tenants: Observable<TenantsC[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: UserdashboardngService,
    private addressService: TypeuserService,
    private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.id = this.route.firstChild.snapshot.params['id'];
    this.reloadDatas();
    this.reloadDatass();
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
        this.tenants = this.employeeService.getEmployeeListcombo();
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
    this.employee.user_id=this.id.toString();
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se agrego la asignacion de dashboard correctamente";
          this.employee  = new UserDashboard();
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
  if(this.employee.typeuser_id =="" ||  this.employee.typeuser_id ==null ){
    this.alertDisable = false;
    this.alertMessage = "Tipo de Usuario Incompleto";          
  }
  else if(this.employee.tenants_id =="" ||  this.employee.tenants_id ==null ){
    this.alertDisable = false;
    this.alertMessage = "Residente Incompleta";          
  }
  else{
    this.save();    
  } 
  }

  gotoList() 
  {
    this.router.navigate(['userd-list',this.id]);
  }

}
