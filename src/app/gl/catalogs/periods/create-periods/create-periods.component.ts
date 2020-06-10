import { Component, OnInit } from '@angular/core';
import { PeriodsService } from "../../../../services/gl/periods.service";
import { Periods } from "../../../../services/gl/periods";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-periods',
  templateUrl: './create-periods.component.html',
  styleUrls: ['./create-periods.component.scss']
})
export class CreatePeriodsComponent implements OnInit {
  
  alertDisable = true;
  alertMessage = "null";

  periods: Periods = new Periods();
  submitted = false;

  constructor(private periodsService: PeriodsService,
    private router: Router) { }

  ngOnInit() {
    //code    
  }

  newPeriods(): void {
    this.submitted = false;
    this.periods = new Periods();
  }

  save() {    
    this.periodsService.createPeriods(this.periods)
      .subscribe(data => {
        let coins = [];
        for (let key in data) {
          this.alertDisable = false;
          this.alertMessage = data['message'];          
        }                
        console.log(data);
      }, 
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });
    this.periods = new Periods();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['periods-list']);
  }
}