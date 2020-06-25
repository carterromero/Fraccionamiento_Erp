import { Component, OnInit } from '@angular/core';
import { Tenants } from 'src/app/tenants';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantsService } from 'src/app/tenants.service';
import { Condominums } from 'src/app/services/admin/condominums';
import { Observable } from "rxjs";
import { CondominumsService } from 'src/app/services/admin/condominums.service';


@Component({
  selector: 'app-tenants-details',
  templateUrl: './tenants-details.component.html',
  styleUrls: ['./tenants-details.component.scss']
})
export class TenantsDetailsComponent implements OnInit {
  id: number;
  tenant: Tenants;
  condominum: Observable<Condominums[]>;
  alertDisable = true;
  alertMessage = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private tenantService: TenantsService, private condominumsService: CondominumsService) { }

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

  reloadData() {

    this.condominumsService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.condominum = this.condominumsService.getEmployeeList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });
  
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
