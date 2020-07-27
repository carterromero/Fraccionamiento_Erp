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
  alertDisables = true;
  alertMessages = "null";

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
   
  //  this.periods.condominums_id = localStorage.getItem('condominums');
    this.periods.createdBy = localStorage.getItem('id');  
    this.periodsService.createPeriods(this.periods)
    .subscribe(data => 
      {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se inserto correctamente";
        this.periods= new Periods();
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

 

  onSubmit() 
  {

    this.alertDisable = true;
    this.alertDisables = true;
  
   
  
     if(this.periods.periodsNumber =="" ||  this.periods.periodsNumber ==null ){
      this.alertDisable = false;
      this.alertMessage = "number incompleta";          
    }
  
    else if(this.periods.periodsYear =="" ||  this.periods.periodsYear ==null ){
      this.alertDisable = false;
      this.alertMessage = "año Incompleta";          
    }
  
   
   
  
    else{
      this.save();    
    }
    }
  gotoList() {
    this.router.navigate(['periods-list']);
  }
}