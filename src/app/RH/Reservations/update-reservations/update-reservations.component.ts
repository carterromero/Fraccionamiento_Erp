import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { TenantsService } from 'src/app/tenants.service';
import { Tenants } from 'src/app/tenants';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Reservations } from 'src/app/reservations';
import { ReservationsService } from 'src/app/reservations.service';
import { ArticlesService } from "src/app/articles.service";
import { Articles } from "src/app/articles";
import * as moment from 'moment';



@Component({
  selector: 'app-update-reservations',
  templateUrl: './update-reservations.component.html',
  styleUrls: ['./update-reservations.component.scss']
})
export class UpdateReservationsComponent implements OnInit {

  id: number;

  reservation: Reservations;
  tenants: Observable<Tenants[]>;
  articles: Observable<Articles[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";


  constructor(private route: ActivatedRoute,  private reservationsService:ReservationsService, private router: Router,
  private tenantService: TenantsService, private articlesService : ArticlesService) { }

  ngOnInit() {
    
    this.reloadDatas();
    this.reloadData();
    this.reservation = new Reservations();
    this.id = this.route.firstChild.snapshot.params['id']
    this.reservationsService.getReservation(this.id).subscribe(data => {
        console.log(data);
        this.reservation = data;
      //  this.reservation.reservations_status = (String(this.reservation.reservations_status) == "false") ? null:"false";
        console.log(this.reservation.reservations_status);
      }, error => {
        console.log(error);
      });
     

    //  this.reservation.reservations_start = new Date(this.reservation.reservations_start);
   //   this.reservation.reservations_end=new Date(this.reservation.reservations_end);
  }

  


  reloadDatas() {
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
    this.alertDisable = true;
    this.alertDisables = true;
    moment('2020-07-24T00:00:00 z',this.reservation.reservations_start.toString());
    moment('2020-07-24T00:00:00 z',this.reservation.reservations_end.toString());
    this.reservation.reservations_start = new Date(this.reservation.reservations_start);
    this.reservation.reservations_end=new Date(this.reservation.reservations_end);
    console.log(this.reservation.reservations_status);
    this.reservationsService.updateReservation(this.id, this.reservation)
    .subscribe(data => {console.log(data); 
          this.alertDisables = false;
          this.alertMessages ="Se actualizo";
          this.gotoList();  
      },
      error => { 
          this.alertDisable = false;
          this.alertMessage = "Fechas y horas no disponibles para la reservación";     
      });
      console.log(this.reservation.reservations_status);
  }



  onSubmit() {
    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.reservation.reservations_start >= this.reservation.reservations_end ){
      this.alertDisable = false;
      this.alertMessage = "La fecha y hora inicial no puede ser mayor o igual a la fecha final "; 
    }
    else{
      this.updateReservation(); 
    }

  }

  gotoList() {
    this.router.navigate(['reservations-list']);
  }


}



