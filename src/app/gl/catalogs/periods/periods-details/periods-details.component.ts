import { Component, OnInit, Input } from '@angular/core';
import { Periods } from "../../../../services/gl/periods";
import { PeriodsService } from "../../../../services/gl/periods.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-periods-details',
  templateUrl: './periods-details.component.html',  
  styleUrls: ['./periods-details.component.scss']
})
export class PeriodsDetailsComponent implements OnInit {

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
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });
  }
}