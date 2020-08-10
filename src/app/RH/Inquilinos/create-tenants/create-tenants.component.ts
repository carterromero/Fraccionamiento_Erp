import { Component, OnInit } from '@angular/core';
import { TenantsService } from 'src/app/tenants.service';
import { Tenants } from 'src/app/tenants';
import { Router } from '@angular/router';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create-tenants',
  templateUrl: './create-tenants.component.html',
  styleUrls: ['./create-tenants.component.scss']
})
export class CreateTenantsComponent implements OnInit {
  
  tenant: Tenants = new Tenants();
  condominums: Observable<Condominums[]>;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos:String;
  dato:String;


  constructor(private tenantsService:TenantsService, private condominumsService:CondominumsService,
  private router: Router) {
   }

  ngOnInit() {
    this.reloadDatas();
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
        event = this.tenant.tenants_agreement;
    };
}
  
  save() {
    this.tenant.condominums_id=Number(localStorage.getItem('condominums'));
    this.tenant.create_by = Number(localStorage.getItem('id'));
    this.tenant.last_update_by = Number(localStorage.getItem('id'));
    this.tenantsService.createTenant(this.tenant)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
      });
    this.tenant = new Tenants();
    this.gotoList();
  }

  onSubmit() {
    console.log(this.tenant.tenants_type);
    this.save(); 
  }

  gotoList() {
    this.router.navigate(['tenants-list']);
  }
}