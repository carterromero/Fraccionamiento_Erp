import { Component, OnInit, ViewChild } from '@angular/core';
import { TenantsService } from 'src/app/tenants.service';
import { Tenants } from 'src/app/tenants';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Reservations } from 'src/app/reservations';
import { ReservationsService } from 'src/app/reservations.service';
import { ArticlesService } from "src/app/articles.service";
import { Articles } from "src/app/articles";
import * as moment from 'moment';
import { CalendarOptions} from '@fullcalendar/angular'; 
import esLocale from '@fullcalendar/core/locales/es';
import {formatDate } from '@angular/common';



@Component({
  selector: 'app-create-reservations',
  templateUrl: './create-reservations.component.html',
  styleUrls: ['./create-reservations.component.scss']
})
export class CreateReservationsComponent implements OnInit {
 // @ViewChild('calendar') calendarComponent: FullCalendarComponent;
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
  data1 = [];
  data2 = [];
  titlee = [];
  ds: Date;
  de:Date;
  constructor(private tenantsService:TenantsService, private route: ActivatedRoute,
  private reservationsService: ReservationsService,  private articlesService : ArticlesService, private router: Router) { }

  ngOnInit() {
    //code

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

   // this.reloadDatas();
    this.reloadData();
    

    }

   
   /* eventSelect(event){
      console.log(event.start,event.end);
       }*/


 /* calendarOptions: CalendarOptions = {
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: 'dayGridMonth',
      themeSystem:'Flatly',
      locale: esLocale,
   // dateClick: this.handleDateClick.bind(this), // bind is important
   events: [
    { title: 'PRUEBA', start:'2020-08-13T18:00:00Z', end:this.ds }
  ]
    };*/


    calendarOptions: CalendarOptions = {
      initialView: 'dayGridMonth',
      droppable: true,
     selectable: true,
     navLinks: true,
     timeZone: 'UTC',
   //  dateClick: this.handleDateClick.bind(this), // bind is important!
   /*  dateClick : function(info) {
      if (info.allDay) {
        $('#reservations_start').val(info.dateStr);
        $('#reservations_end').val(info.dateStr);
      } else {
        let fechaHora = info.dateStr.split("T");
        $('#reservations_start').val(fechaHora[0]);
        $('#reservations_end').val(fechaHora[0]);
      //  $('#HoraInicio').val(fechaHora[1].substring(0, 5));
      }
    },*/
      headerToolbar: {
        left: 'today,prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
 
      themeSystem:'Flatly',
      locale: esLocale,
      eventColor: '#36294F',
      height: 600,
    };

    handleDateClick(arg) {
      this.reservation.reservations_start = arg.dateStr;
      formatDate(this.reservation.reservations_start, 'yyyy-MM-ddThh:mm:ss', 'en-US','GMT-5');
      console.log( this.reservation.reservations_start);
      arg = "";
    }

    handleDateClickF(arg) {
       this.reservation.reservations_end= arg.dateStr;
       formatDate(this.reservation.reservations_end, 'yyyy-MM-ddThh:mm:ss', 'en-US','GMT-5');
       console.log( this.reservation.reservations_end);
       arg = "";
    }

    agregarFechaI(){
    //  this.calendarOptions.dateClick = null;
    console.log("entro a agregar fecha inicial");
    this.calendarOptions.dateClick= this.handleDateClick.bind(this);
    console.log(this.reservation.reservations_start);
 //   this.calendarOptions.dateClick = null;
    
    }
    
 agregarFechaF(){
     
      console.log("entro a agregar fecha final");
      this.calendarOptions.dateClick= this.handleDateClickF.bind(this);
      console.log(this.reservation.reservations_end);
     // this.calendarOptions.dateClick = null;
    }



  
    toggleWeekends() {
  // this.calendarOptions.eventRemove = null;
      this.calendarOptions.eventSources = [];
      var events = [];
      var dats = [];
      this.titlee =[];
      this.data1=[];
      this.data2=[];
      this.reservationsService.getReservationListR(this.reservation.articles_sku).subscribe(
        data => {
          console.log(data);
          this.reservations = this.reservationsService.getReservationListR(this.reservation.articles_sku);
       //   let calendarApi = this.reservationsService.getReservationListR(this.reservation.articles_sku);
          for (let key in data) {
            dats = data[key];
            //console.log(dats);
            this.titlee.push(
              [dats['articles_name_article']]);
              this.data1.push(
                [dats['reservations_start']]);
                this.data2.push(
                  [dats['reservations_end']]); 
                 // console.log(this.titlee[key]);
   events.push({ title: this.titlee[0], start:formatDate(this.data1[key], 'yyyy-MM-ddThh:mm:ss', 'en-US','GMT-5'), end: formatDate(this.data2[key], 'yyyy-MM-ddThh:mm:ss', 'en-US','GMT-5') });
      this.calendarOptions.eventSources = [events];
    
     // this.calendarOptions.select({start, end: formatDate(this.data2[key], 'yyyy-MM-ddThh:mm:ss', 'en-US','+0530') });

    }//end for
        },
        error => {
          console.log(error);   
        });
   
      
    
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
    console.log(this.reservation.articles_sku);
   // moment('2020-07-24T00:00:00 z',this.reservation.reservations_start.toString());
    //moment('2020-07-24T00:00:00 z',this.reservation.reservations_end.toString());
    this.reservation.reservations_start = new Date(this.reservation.reservations_start);
    this.reservation.reservations_end=new Date(this.reservation.reservations_end);
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
   console.log(this.reservation.reservations_start);
   console.log(this.reservation.reservations_end);
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