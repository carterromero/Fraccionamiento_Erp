import { Component, OnInit } from '@angular/core';
import { VisitorsService } from '../../service/visitors.service';
import { TenantsServiceService } from '../../service/tenants-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Tags } from '../../models/tags';
import { InsertTenants } from '../../models/insert-tenants';
import { Tenants } from '../../models/tenants';

@Component({
  selector: 'app-ac-update-tenants',
  templateUrl: './ac-update-tenants.component.html',
  styleUrls: ['./ac-update-tenants.component.scss']
})
export class AcUpdateTenantsComponent implements OnInit {

  id: number;
  tenant: Tenants;
  tags: Observable<Tags[]>;
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,
    private router: Router,
    private TenantsServiceService: TenantsServiceService,
    private visitorsService: VisitorsService) { }


  ngOnInit() {
    this.tenant = new Tenants();
    this.id = this.route.firstChild.snapshot.params['id'];
    this.TenantsServiceService.getviewsid(this.id)
      .subscribe(data => {
        this.tenant = data;
        console.log("hola", this.tenant);
      }, error => {console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });

      this.getTags();
  }

  updateTenants() {
    this.TenantsServiceService.updateTenants(this.id, this.tenant)
      .subscribe(data => console.log(data), error => console.log(Response));
      console.log(Response)
    this.tenant = new Tenants();
    this.list();
  }

  list() {
    this.router.navigate(['ac-tenants-list'])
  }

  onSubmit() {
    this.updateTenants();
  }

  getTags()
  {
    this.visitorsService.getTagsT(this.id).subscribe(
      response => {
        this.tags = this.visitorsService.getTagsT(this.id);
          console.log(response);
      },
      error => {
         console.log(error);
      }
    );  
  }
}
