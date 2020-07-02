import { Component, OnInit } from '@angular/core';
import { TenantsService } from 'src/app/tenants.service';
import { Tenants } from 'src/app/tenants';
import { Router } from '@angular/router';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Observable } from 'rxjs';
import { Agreements } from 'src/app/agreements';
import { AgreementService } from 'src/app/agreements.service';


@Component({
  selector: 'app-create-tenants',
  templateUrl: './create-tenants.component.html',
  styleUrls: ['./create-tenants.component.scss']
})
export class CreateTenantsComponent implements OnInit {
  
  tenant: Tenants = new Tenants();
  condominums: Observable<Condominums[]>;
  agreements: Observable<Agreements[]>;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private tenantsService:TenantsService, private condominumsService:CondominumsService,
  private agreementService: AgreementService,  private router: Router) { }

  ngOnInit() {
    //code
    this.reloadDatas();
    this.reloadDatas2();
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
  save() {
    this.tenantsService.createTenant(this.tenant)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
       // localStorage.setItem('token', "");
     //   this.router.navigate(['auth/signin']);
      });
    this.tenant = new Tenants();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['tenants-list']);
  }
}