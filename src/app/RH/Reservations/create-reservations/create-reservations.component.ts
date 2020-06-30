import { Component, OnInit } from '@angular/core';
import { TenantsService } from 'src/app/tenants.service';
import { Tenants } from 'src/app/tenants';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reservations } from 'src/app/reservations';
import { ReservationsService } from 'src/app/reservations.service';


@Component({
  selector: 'app-create-reservations',
  templateUrl: './create-reservations.component.html',
  styleUrls: ['./create-reservations.component.scss']
})
export class CreateReservationsComponent implements OnInit {
  
  reservation: Reservations = new Reservations();
  tenants: Observable<Tenants[]>;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private tenantsService:TenantsService,
  private reservationsService: ReservationsService,  private router: Router) { }

  ngOnInit() {
    //code
  }



  reloadDatas() 
  {

    this.tenantsService.getTenantList().subscribe(
      data => {
        console.log(data);
        this.tenants = this.tenantsService.getTenantList();
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
    this.reservationsService.createReservation(this.reservation)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
       // localStorage.setItem('token', "");
     //   this.router.navigate(['auth/signin']);
      });
    this.reservation = new Reservations();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['reservations-list']);
  }
}