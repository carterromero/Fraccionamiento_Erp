import { Component, OnInit } from '@angular/core';
import { UserDashboard } from 'src/app/services/admin/userdashboard';
import { Observable } from 'rxjs';
import { TypeUser } from 'src/app/services/admin/typeuser';
import { TenantsC } from 'src/app/services/admin/tenants';
import { Router, ActivatedRoute } from '@angular/router';
import { UserdashboardngService } from 'src/app/services/admin/userdashboardng.service';
import { TypeuserService } from 'src/app/services/admin/typeuser.service';

@Component({
  selector: 'app-userdashboard-details',
  templateUrl: './userdashboard-details.component.html',
  styleUrls: ['./userdashboard-details.component.scss']
})
export class UserdashboardDetailsComponent implements OnInit {

  id: number;
  employee: UserDashboard;
  typeuser: Observable<TypeUser[]>;
  tenans: Observable<TenantsC[]>;
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: UserdashboardngService,
    private addressService: TypeuserService    
    ) { }

  ngOnInit() {
    this.employee = new UserDashboard();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    this.reloadDatas() ;
    this.reloadDatass() ;
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
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

    this.employeeService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.tenans = this.employeeService.getEmployeeListcombo();
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

  

  
  gotoList() {
    this.router.navigate(['userd-list',this.employee.user_id]);
  }

}
