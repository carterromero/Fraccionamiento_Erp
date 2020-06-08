import { Component, OnInit } from '@angular/core';
import { Legals } from 'src/app/legals';
import { LegalsService } from 'src/app/legals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-legals',
  templateUrl: './create-legals.component.html',
  styleUrls: ['./create-legals.component.scss']
})

export class CreateLegalsComponent implements OnInit {

  employee: Legals = new Legals();
  submitted = false;

  constructor(private employeeService: LegalsService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Legals();
  }

  save() {

    if(this.employee.legals_status=="False" || this.employee.legals_status==null){
      this.employee.legals_status="0";
    }
    else{
      this.employee.legals_status="1";
    }

    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {console.log(data);
          //this.employee = new Legals();
          this.gotoList();    
        }, 
      error => {
        console.log(error);    
      });

  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['legals-list']);
  }

}