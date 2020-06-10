import { Component, OnInit } from '@angular/core';
import { PeriodsService } from "../../../../services/gl/periods.service";
import { Periods } from "../../../../services/gl/periods";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-periods',
  templateUrl: './update-periods.component.html',
  styleUrls: ['./update-periods.component.scss']
})
export class UpdatePeriodsComponent implements OnInit {

  id: number;
  periods: Periods;

  constructor(private route: ActivatedRoute,private router: Router,
    private periodsService: PeriodsService) { }

  ngOnInit() {
    this.periods = new Periods();

    //this.id = this.route.snapshot.params['id'];
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    this.periodsService.getPeriods(this.id)
      .subscribe(data => {     
        console.log(data);
        this.periods = data;  
        this.periods.periodsStatus = (String(this.periods.periodsStatus) == "false") ? null:1;    
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });
  }

  updatePeriods() {    
    this.periods.periodsStatus = (String(this.periods.periodsStatus) == "false") ? 0:1;
    this.periodsService.updatePeriods(this.id, this.periods)
      .subscribe(data => {
        console.log(data);        
      }, 
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });
    this.periods = new Periods();
    //this.gotoList();
  }

  onSubmit() {
    this.updatePeriods();    
  }

  gotoList() {
    this.router.navigate(['periods-list']);
  }
}