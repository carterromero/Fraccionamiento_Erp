import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
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
        this.reservation.reservations_status = (String(this.reservation.reservations_status) == "false") ? null:"false";
        console.log(this.reservation.reservations_status);
      }, error => {
        console.log(error);
      });

      
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
    this.alertDisable = true;
    this.alertDisables = true;
    this.reservation.reservations_start = new Date("2018-03-01T12:00 am");
    this.reservation.last_update_by=Number(localStorage.getItem('id'));
    this.reservationsService.updateReservation(this.id, this.reservation)
    .subscribe(data => {console.log(data);
      this.gotoList();  
          this.alertDisables = false;
          this.alertMessages ="Se actualizo";
          this.gotoList();
        }, 
      error => {
        console.log(error);    
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = "No se error al actualizar";
        }      
      });
  }



  onSubmit() {
    this.updateReservation();    
  }

  gotoList() {
    this.router.navigate(['reservations-list']);
  }


}



