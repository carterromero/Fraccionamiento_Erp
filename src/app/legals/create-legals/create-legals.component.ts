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

    this.employee.userid="3";


    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.gotoList();    
        }, 
      error => {
        console.log(error);    
      });

  }

  onSubmit() 
  {
    this.submitted = true;
    this.save();    
  }

  gotoList() 
  {
    this.router.navigate(['legals-list']);
  }

}