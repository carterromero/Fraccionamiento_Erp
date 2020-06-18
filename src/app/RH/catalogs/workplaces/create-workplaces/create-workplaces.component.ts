import { Component, OnInit } from '@angular/core';
import { WorkplacesService } from 'src/app/workplaces.service';
import { Workplaces } from 'src/app/workplaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-workplaces',
  templateUrl: './create-workplaces.component.html',
  styleUrls: ['./create-workplaces.component.scss']
})
export class CreateWorkplacesComponent implements OnInit {
  
  employee: Workplaces = new Workplaces();
  submitted = false;

  constructor(private employeeService: WorkplacesService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Workplaces();
  }

  save() {
    this.employee.last_update_by=3;
    console.log(this.employee);
    this.employee.create_by=1;
    console.log(this.employee);
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
       // localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });
    this.employee = new Workplaces();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['workplaces-list']);
  }
}