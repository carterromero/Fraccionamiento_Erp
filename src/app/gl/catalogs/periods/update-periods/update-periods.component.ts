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
alertDisable = true;
alertDisables = true;
alertMessage = "null";
alertMessages = "null";


  constructor(private route: ActivatedRoute,private router: Router,
    private periodsService: PeriodsService) { }

ngOnInit() {

  this.periods = new Periods();
  this.id = this.route.firstChild.snapshot.params['id']
  console.log(this.periods.periodsStatus);
  this.periodsService.getPeriods(this.id)
    .subscribe(data => {
      console.log(data);
      this.periods = data;
      this.periods.periodsStatus = (String(this.periods.periodsStatus) == "false") ? null:1;  
     console.log(this.periods.periodsStatus);
    }, error => {
      console.log(error);let coins = [];
      for (let key in error) {
        this.alertDisable = false;
        this.alertMessage = error['statusText'];          
      }
      
    });
}


updatePeriods() {

  console.log(this.periods.periodsStatus);
  
  this.periodsService.updatePeriods(this.id, this.periods)
    .subscribe(data => {
      console.log(data);
      this.alertDisables = false;
      this.alertMessages ="Se actualizo  correctamente";
    }, 
    error => {
      console.log(error);
      let coins = [];
      for (let key in error) {
        this.alertDisable = false;
        this.alertMessage = error['statusText'];          
      }
      
    });
  

}

onSubmit() {
  

  this.alertDisable = true;
  this.alertDisables = true;

  if(this.periods.periodsName =="" ||  this.periods.periodsName ==null ){
    this.alertDisable = false;
    this.alertMessage = "parent_1 Incompleta ";          
  }

  else{
    this.updatePeriods();    
  }


}

gotoList() {
  this.router.navigate(['periods-list']);
}

}
