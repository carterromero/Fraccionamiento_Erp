import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;
  datos:String;
  dato:String;
 
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) {
     }

    base64EncodeUnicode() {
      var base64EncodedPDF = this.employee.employees_cv;
        // base64EncodedPDF -  variable from global-vars.js
  //                     but would normally be passed in dynamically  
     var dataURI = "data:application/pdf;base64," +base64EncodedPDF;
     window.open(dataURI);
  }

  ngOnInit() {
    this.employee = new Employee();    
    //this.id = this.route.snapshot.params['id'];
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    this.employeeService.getEmployee(this.id).subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });
  }
}