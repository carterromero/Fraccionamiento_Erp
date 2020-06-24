import { Component, OnInit } from '@angular/core';
import { TenantsService } from "src/app/tenants.service";
import { Tenants } from "src/app/tenants";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-tenants',
  templateUrl: './update-tenants.component.html',
  styleUrls: ['./update-tenants.component.scss']
})
export class UpdateTenantsComponent implements OnInit {

  id: number;
  tenant: Tenants;

  constructor(private route: ActivatedRoute,private router: Router,
    private tenantService: TenantsService) { }

  ngOnInit() {
    this.tenant = new Tenants();


    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.tenant.tenants_status);
    this.tenantService.getTenant(this.id)
      .subscribe(data => {
        console.log(data);
        this.tenant = data;
        this.tenant.tenants_status = (String(this.tenant.tenants_status) == "false") ? null:"false";
        console.log(this.tenant.tenants_status);
      }, error => {
        console.log(error);
        
      });
      
  }

  updateTenant() {
    this.tenant.last_update_by=3;
    console.log(this.tenant);
    console.log(this.id);
    
    
    this.tenantService.updateTenant(this.id, this.tenant)
      .subscribe(data => {console.log(data);
        this.gotoList();  
      }, 
      error => {
        console.log(error);
        
      });
    
  
  }

  onSubmit() {
    this.updateTenant();    
  }

  gotoList() {
    this.router.navigate(['tenants-list']);
  }


}
