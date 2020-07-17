import { Component, OnInit } from '@angular/core';
import { Tenants } from 'src/app/tenants';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantsService } from 'src/app/tenants.service';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tenants-details',
  templateUrl: './tenants-details.component.html',
  styleUrls: ['./tenants-details.component.scss']
})
export class TenantsDetailsComponent implements OnInit {
  id: number;
  tenant: Tenants;
  condominums: Observable<Condominums[]>;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private tenantService: TenantsService, private condominumsService: CondominumsService) { }

    goagreements(){
      var windo = window.open("", "CV_Empleado");  
      var objbuilder = '';
      objbuilder += ('<embed width=\'100%\' height=\'100%\'  src="data:application/pdf;base64,');
      objbuilder += (this.tenant.tenants_agreement);
      objbuilder += ('" type="application/pdf" />');
      windo.document.write(objbuilder); 
    }

 ngOnInit() {
   this.reloadDatas();
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


}
