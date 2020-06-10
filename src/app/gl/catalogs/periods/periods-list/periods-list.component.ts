import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PeriodsService } from "../../../../services/gl/periods.service";
import { Periods } from "../../../../services/gl/periods";
import { Router } from '@angular/router';

@Component({
  selector: 'app-periods-list',
  templateUrl: './periods-list.component.html',
  styleUrls: ['./periods-list.component.scss']
})
export class PeriodsListComponent implements OnInit {

  periods: Observable<Periods[]>;

  constructor(private periodsService: PeriodsService,
    private router: Router) {}

  ngOnInit() {    
    this.reloadData();
  }

  reloadData() {
    this.periodsService.getPeriodsList().subscribe(
      data => {
        console.log(data);
        this.periods = this.periodsService.getPeriodsList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);     
      });
  }

  deletePeriods(id: number) {
    this.periodsService.deletePeriods(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => {
          console.log(error);
          //localStorage.setItem('token', "");
          //this.router.navigate(['auth/signin']);
        });
  }

  periodsDetails(id: number){
    console.log(id);
    this.router.navigate(['periods-details', id]);
  }

  updatePeriods(id: number){
    console.log(id);
    this.router.navigate(['update-periods', id]);
  }
}