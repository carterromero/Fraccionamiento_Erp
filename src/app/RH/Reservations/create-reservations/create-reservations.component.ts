import { Component, OnInit } from '@angular/core';
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
  selector: 'app-create-reservations',
  templateUrl: './create-reservations.component.html',
  styleUrls: ['./create-reservations.component.scss']
})
export class CreateReservationsComponent implements OnInit {
  
  reservation: Reservations = new Reservations();
  tenants: Observable<Tenants[]>;
  articles: Observable<Articles[]>;
  article : Articles=new Articles();
  reservations: Observable<Reservations[]>;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  id: number;

  constructor(private tenantsService:TenantsService, private route: ActivatedRoute,
  private reservationsService: ReservationsService,  private articlesService : ArticlesService, private router: Router) { }

  ngOnInit() {
    //code
    this.reloadDatas();
    this.reloadData();
    
    }


  reloadDataList() {
    this.reservationsService.getReservationListR(this.reservation.articles_sku).subscribe(
      data => {
        console.log(data);
        this.reservations = this.reservationsService.getReservationListR(this.reservation.articles_sku);
      },
      error => {
        console.log(error);   
      });
  } 

  javq(event){
 
    event =  this.reloadDataList();
  
   
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
    this.alertDisable = true;
    this.alertDisables = true;
  //  moment('2020-07-24T00:00:00 z',this.reservation.reservations_start.toString());
   // moment('2020-07-24T00:00:00 z',this.reservation.reservations_end.toString());
  //   this.reservation.reservations_start = new Date(this.reservation.reservations_start);
   //  this.reservation.reservations_end=new Date(this.reservation.reservations_end);
    this.reservation.create_by=Number(localStorage.getItem('id'));
    this.reservation.last_update_by=Number(localStorage.getItem('id'));
    this.reservationsService.createReservation(this.reservation)
      .subscribe(data => {
    this.alertDisables = false;
    this.alertMessages = "Reservación creada"
    this.gotoList();
  },
      error => {
        console.log(error);
        this.alertDisable = false;
        this.alertMessage = "Fechas y horas no disponibles para la reservación";
      });
    
  }


  onSubmit() {
    this.submitted = true;
    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.reservation.reservations_start >= this.reservation.reservations_end ){
      this.alertDisable = false;
      this.alertMessage = "La fecha y hora inicial no puede ser mayor o igual a la fecha final "; 
    }
    else{
      this.save();    
    }
  }

  gotoList() {
    this.router.navigate(['reservations-list']);
  }
}