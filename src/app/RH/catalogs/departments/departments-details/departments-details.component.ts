import { Component, OnInit } from '@angular/core';
import { Departments } from 'src/app/departments';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentsService } from 'src/app/departments.service';

@Component({
  selector: 'app-departments-details',
  templateUrl: './departments-details.component.html',
  styleUrls: ['./departments-details.component.scss']
})
export class DepartmentsDetailsComponent implements OnInit {
  id: number;
  employee: Departments;
  alertDisable = true;
  alertMessage = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: DepartmentsService) { }

 ngOnInit() {
    this.employee = new Departments();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }
}
