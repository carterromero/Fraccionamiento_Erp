import { Component, OnInit } from '@angular/core';
import { JournalsService } from "../../../../services/gl/journals.service";
import { Journals } from "../../../../services/gl/journals";
import { Router } from '@angular/router';
import { PeriodsService } from "../../../../services/gl/periods.service";
import { Periods } from "../../../../services/gl/periods";
import { Observable } from "rxjs";
import { Directive, ElementRef, HostListener, Input } from '@angular/core'; 
@Component({
  selector: 'app-create-journals',
  templateUrl: './create-journals.component.html',
  
  styleUrls: ['./create-journals.component.scss']
})
export class CreateJournalsComponent implements OnInit {


  employee: Journals = new Journals();
  periods: Observable<Periods[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  @Input() OnlyNumber: boolean; 
  constructor(private employeeService: JournalsService,
    private periodsService: PeriodsService,
    private el: ElementRef,
    private router: Router) { }

  ngOnInit() {
    this.reloadDatas1() 
  }

  newEmployee(): void {
    this.employee = new Journals();
  }

  reloadDatas1() {
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

  save() {
    
    this.employee.user_id="3";
    this.employee.created_by = localStorage.getItem('id');
    this.employee.journals_condominiums_id = localStorage.getItem('condominums');
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto correctamente";
          this.employee= new Journals();
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

 

   if(this.employee.journals_date =="" ||  this.employee.journals_date ==null ){
    this.alertDisable = false;
    this.alertMessage = "fecha incompleta ";          
  }

  else if(this.employee.journals_description =="" ||  this.employee.journals_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "descripcion Incompleta";          
  }
  else if(this.employee.journals_currency_code =="" ||  this.employee.journals_currency_code ==null ){
    this.alertDisable = false;
    this.alertMessage = "codigo moneda Incompleta";          
  }
 
 

  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['journals-list']);
  }


  @HostListener('keydown', ['$event']) onKeyDown(event) { 
    let e = <KeyboardEvent> event; 
    if (this.OnlyNumber) { 
     if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 || 
     // Allow: Ctrl+A 
     (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) || 
     // Allow: Ctrl+C 
     (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) || 
     // Allow: Ctrl+V 
     (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) || 
     // Allow: Ctrl+X 
     (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) || 
     // Allow: home, end, left, right 
     (e.keyCode >= 35 && e.keyCode <= 39)) { 
      // let it happen, don't do anything 
      return; 
     } 
     // Ensure that it is a number and stop the keypress 
     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) { 
      e.preventDefault(); 
     } 
     } 
    } 



}

