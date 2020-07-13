import { Component, OnInit } from '@angular/core';
import { TenantsServiceService } from 'src/app/AC/service/tenants-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tenants } from '../../models/tenants';
@Component({
  selector: 'app-ac-tenants-list',
  templateUrl: './ac-tenants-list.component.html',
  styleUrls: ['./ac-tenants-list.component.scss']
})
export class AcTenantsListComponent implements OnInit {

  page = 1;
  pageSize =8;

  tabTenants: number = 1;

  constructor( private TenantsServiceService: TenantsServiceService ,
    private router: Router ) { }

    tenants: Observable<Tenants[]>;
  ngOnInit(){
    this.getTenants();
  }

  getTenants()
  {
    this.TenantsServiceService.getTenants().subscribe(
      response => {
        this.tenants = this.TenantsServiceService.getTenants();
          console.log(response);
      },
      error => {
         console.log(error);
      }
  );  
  }

  updateTenants(id: number){
    this.router.navigate(['ac-update-tenants', id]);
  }


  tenantDetails(id: number){
    this.router.navigate(['tenant-details', id]);
  }

  createTenants(){
    this.router.navigate(['tenants-create']);
  }
}
