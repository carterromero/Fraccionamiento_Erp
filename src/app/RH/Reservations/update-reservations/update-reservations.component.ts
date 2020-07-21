import { Component, OnInit } from '@angular/core';
import { TenantsService } from 'src/app/tenants.service';
import { Tenants } from 'src/app/tenants';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Reservations } from 'src/app/reservations';
import { ReservationsService } from 'src/app/reservations.service';
import { ArticlesService } from "src/app/articles.service";
import { Articles } from "src/app/articles";


@Component({
  selector: 'app-update-reservations',
  templateUrl: './update-reservations.component.html',
  styleUrls: ['./update-reservations.component.scss']
})
export class UpdateReservationsComponent implements OnInit {

  id: number;
  dat: Date;
  reservation: Reservations;
  tenants: Observable<Tenants[]>;
  articles: Observable<Articles[]>;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private route: ActivatedRoute,  private reservationsService:ReservationsService, private router: Router,
  private tenantService: TenantsService, private articlesService : ArticlesService) { }

  ngOnInit() {
    this.reloadDatas();
    this.reloadData();

    this.reservation = new Reservations();
   
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.reservation.reservations_status);
    this.reservationsService.getReservation(this.id).subscribe(data => {
        console.log(data);
        this.reservation = data;
        this.reservation.reservations_status = (String(this.reservation.reservations_status) == "false") ? null:"false";
        console.log(this.reservation.reservations_status);
      }, error => {
        console.log(error);
      });
  }

  reloadDatas() 
  {
    this.articlesService.getListCommons().subscribe(
      data => {
        console.log(data);
        this.articles = this.articlesService.getListCommons();
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

  reloadData() 
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
 
 
  updateReservation() {
    this.reservation.last_update_by=Number(localStorage.getItem('id'));
    console.log(this.reservation);
    console.log(this.id);
    this.reservationsService.updateReservation(this.id, this.reservation).subscribe(data => {console.log(data);
        this.gotoList();  
      }, 
        error => {
        console.log(error);
      });
  }



  onSubmit() {
    this.updateReservation();    
  }

  gotoList() {
    this.router.navigate(['reservations-list']);
  }


}
