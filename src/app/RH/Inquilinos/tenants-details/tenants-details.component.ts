import { Component, OnInit } from '@angular/core';
import { Tenants } from 'src/app/tenants';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantsService } from 'src/app/tenants.service';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Observable } from 'rxjs';
import { Agreements } from 'src/app/agreements';
import { AgreementService } from 'src/app/agreements.service';

@Component({
  selector: 'app-tenants-details',
  templateUrl: './tenants-details.component.html',
  styleUrls: ['./tenants-details.component.scss']
})
export class TenantsDetailsComponent implements OnInit {
  id: number;
  tenant: Tenants;
  condominums: Observable<Condominums[]>;
  agreements: Observable<Agreements[]>;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private tenantService: TenantsService, private condominumsService: CondominumsService, private agreementService: AgreementService) { }

 ngOnInit() {
    this.tenant = new Tenants();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.tenantService.getTenant(this.id)
      .subscribe(data => {
        console.log(data);
        this.tenant = data;
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
/*  reloadDatas() 
  {
    this.addressService.getAddressList().subscribe(
      data => {
        console.log(data);
        this.addresses = this.addressService.getAddressList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });  
  }*/


}
