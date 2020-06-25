import { Component, OnInit } from '@angular/core';
import { TenantsService } from 'src/app/tenants.service';
import { Tenants } from 'src/app/tenants';
import { Router, ActivatedRoute } from '@angular/router';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Observable } from 'rxjs';
import { Agreements } from 'src/app/agreements';
import { AgreementService } from 'src/app/agreements.service';

@Component({
  selector: 'app-update-tenants',
  templateUrl: './update-tenants.component.html',
  styleUrls: ['./update-tenants.component.scss']
})
export class UpdateTenantsComponent implements OnInit {

  id: number;
  tenant: Tenants;
  condominums: Observable<Condominums[]>;
  agreements: Observable<Agreements[]>;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private route: ActivatedRoute,  private condominumsService:CondominumsService,
    private agreementService: AgreementService, private router: Router,
  private tenantService: TenantsService) { }

  ngOnInit() {
    this.tenant = new Tenants();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.tenant.tenants_status);
    this.tenantService.getTenant(this.id).subscribe(data => {
        console.log(data);
        this.tenant = data;
        this.tenant.tenants_status = (String(this.tenant.tenants_status) == "false") ? null:"false";
        console.log(this.tenant.tenants_status);
      }, error => {
        console.log(error);
      });
  }
  reloadDatas() 
  {

    this.condominumsService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.condominums = this.condominumsService.getEmployeeListcombo();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }
  reloadDatas2() 
  {

    this.agreementService.getAgreementCombo().subscribe(
      data => {
        console.log(data);
        this.agreements = this.agreementService.getAgreementCombo();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }

  updateTenant() {
    this.tenant.last_update_by=3;
    console.log(this.tenant);
    console.log(this.id);
    this.tenantService.updateTenant(this.id, this.tenant).subscribe(data => {console.log(data);
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
