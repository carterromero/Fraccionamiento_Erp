import { Component, OnInit } from '@angular/core';
import { Configmainte } from 'src/app/configmainte';
import { ConfigmainteService } from 'src/app/configmainte.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-payroll',
  templateUrl: './create-payroll.component.html',
  styleUrls: ['./create-payroll.component.scss']
})
export class CreatePayrollComponent implements OnInit {
  employee: Configmainte = new Configmainte();
  submitted = false;

  constructor(private employeeService: ConfigmainteService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Configmainte();
  }

  save() {

    this.employee.last_updated_by;
    console.log(this.employee);
    


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
    this.router.navigate(['/config-Maintenlist']);
  }


}
