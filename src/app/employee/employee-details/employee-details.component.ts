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
  [x: string]: any;

  id: number;
  employee: Employee;
  datos:String;
  dato:String;

  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) {
     }


  gocv(){
    var windo = window.open("", "");  
    var objbuilder = '';
    objbuilder += ('<embed width=\'100%\' height=\'100%\'  src="data:application/pdf;base64,');
    objbuilder += (this.employee.employees_cv);
    objbuilder += ('" type="application/pdf" />');
    windo.document.write(objbuilder); 
  }

  gocontract(){
    var windo = window.open("", "");  
    var objbuilder = '';
    objbuilder += ('<embed width=\'100%\' height=\'100%\'  src="data:application/pdf;base64,');
    objbuilder += (this.employee.employees_contract);
    objbuilder += ('" type="application/pdf" />');
    windo.document.write(objbuilder); 
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