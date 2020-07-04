import { Component, OnInit } from '@angular/core';
import { Reservations } from 'src/app/reservations';
import { ReservationsService } from 'src/app/reservations.service';
import { Observable } from 'rxjs';
import { Tenants } from 'src/app/tenants';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantsService } from 'src/app/tenants.service';


@Component({
  selector: 'app-reservations-details',
  templateUrl: './reservations-details.component.html',
  styleUrls: ['./reservations-details.component.scss']
})
export class ReservationsDetailsComponent implements OnInit {
  id: number;
  tenants: Observable<Tenants[]>;
  reservation: Reservations;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private tenantService: TenantsService, private reservationsService: ReservationsService) { }

 ngOnInit() {
   this.reloadDatas();
    this.reservation = new Reservations();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.reservationsService.getReservation(this.id)
      .subscribe(data => {
        console.log(data);
        this.reservation = data;
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

    this.tenantService.getTenantList().subscribe(
      data => {
        console.log(data);
        this.tenants = this.tenantService.getTenantList();
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
