import { Component, OnInit } from '@angular/core';
import { Permissions } from 'src/app/services/admin/permissions';
import { Observable } from 'rxjs';
import { Rol } from 'src/app/services/admin/rol';
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionsService } from 'src/app/services/admin/permissions.service';
import { RolService } from 'src/app/services/admin/rol.service';

@Component({
  selector: 'app-permissions-details',
  templateUrl: './permissions-details.component.html',
  styleUrls: ['./permissions-details.component.scss']
})
export class PermissionsDetailsComponent implements OnInit {
  id: number;
  employee: Permissions;
  addresses: Observable<Rol[]>;
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PermissionsService,
    private addressService: RolService
    
    ) { }

  ngOnInit() 
  {
    this.employee = new Permissions();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    this.reloadDatas() ;
    
    
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

}
