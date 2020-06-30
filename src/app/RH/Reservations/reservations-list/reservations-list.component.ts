import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ReservationsService } from "src/app/reservations.service";
import { Reservations } from "src/app/reservations";
import { Router } from '@angular/router';

@Component({
  selector: "app-reservations-list",
  templateUrl: "./reservations-list.component.html",
  styleUrls: ["./reservations-list.component.scss"]
})
export class ReservationsListComponent implements OnInit {
  reservations: Observable<Reservations[]>;
  elements: any = [];

  constructor(private reservationsService: ReservationsService,
    private router: Router) {}

  ngOnInit() {    
    this.reloadData();

    for (let i = 1; i <= 11; i++) {
      this.elements.push({
        id: i,
        first: {nick: 'Nick ' + i, name: 'Name ' + i},
        last: 'Name ' + i,
        handle: 'Handle ' + i
      });
    }
  }

  reloadData() {
    /*localStorage.setItem('token', "");*/
    /*this.employees = this.employeeService.getEmployeeList();*/
    this.reservationsService.getReservationList().subscribe(
      data => {
        console.log(data);
        this.reservations = this.reservationsService.getReservationList();
      },
      error => {
        console.log(error);
       // localStorage.setItem('token', "");
       // this.router.navigate(['auth/signin']);     
      });
  }

  deleteReservation(id: number) {
    this.reservationsService.deleteReservation(id).subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => {
          console.log(error);
         // localStorage.setItem('token', "");
         // this.router.navigate(['auth/signin']);
        });
  }

  reservationDetails(id: number){
    console.log(id);
    this.router.navigate(['reservations-details', id]);
  }

  updateReservation(id: number){
    console.log(id);
    this.router.navigate(['update-reservations', id]);
  }
}