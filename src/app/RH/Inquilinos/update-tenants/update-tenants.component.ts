import { Component, OnInit } from '@angular/core';
import { TenantsService } from 'src/app/tenants.service';
import { Tenants } from 'src/app/tenants';
import { Router, ActivatedRoute } from '@angular/router';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-tenants',
  templateUrl: './update-tenants.component.html',
  styleUrls: ['./update-tenants.component.scss']
})
export class UpdateTenantsComponent implements OnInit {

  id: number;
  tenant: Tenants;
  condominums: Observable<Condominums[]>;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos:String;
  dato:String;
  constructor(private route: ActivatedRoute,  private condominumsService:CondominumsService,
  private router: Router,
  private tenantService: TenantsService) { }

  ngOnInit() {
    this.reloadDatas();
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

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.datos = reader.result.toString();
        this.tenant.tenants_agreement = this.datos.replace("data:application/pdf;base64,","")
      /*  this.employee.employees_contract = this.datos.replace("data:application/pdf;base64,","")*/
        event = this.tenant.tenants_agreement;
      /*  event = this.employee.employees_contract*/
     
    };
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
