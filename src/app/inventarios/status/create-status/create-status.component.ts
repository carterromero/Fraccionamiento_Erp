import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/status';
import { StatusService } from 'src/app/status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-status',
  templateUrl: './create-status.component.html',
  styleUrls: ['./create-status.component.scss']
})
export class CreateStatusComponent implements OnInit {

  employee: Status = new Status();
  submitted = false;

  constructor(private employeeService: StatusService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Status;
  }

  save() {

   // this.employee.userid="3";


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
    this.router.navigate(['status-articles-list']);
  }
}
