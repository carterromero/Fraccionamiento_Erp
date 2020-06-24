import { Component, OnInit } from '@angular/core';
import { Configmainte } from 'src/app/configmainte';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigmainteService } from 'src/app/configmainte.service';

@Component({
  selector: 'app-update-payroll',
  templateUrl: './update-payroll.component.html',
  styleUrls: ['./update-payroll.component.scss']
})
export class UpdatePayrollComponent implements OnInit {

  id: number;
  employee: Configmainte;

  constructor(private route: ActivatedRoute, private router: Router,
    private employeeService: ConfigmainteService) { }

    ngOnInit() {

      this.employee = new Configmainte();
      this.id = this.route.firstChild.snapshot.params['id']
      console.log(this.employee.status);
      this.employeeService.getEmployee(this.id)
        .subscribe(data => {
          console.log(data);
          this.employee = data;
          this.employee.status = (String(this.employee.status) == "false") ? null:"false";
          console.log(this.employee.status);
        }, error => {
          console.log(error);
          
        });
        
  
  
    }
  
     
  
    updateEmployee() {
  
      
      
      this.employee.last_updated_by;
      console.log(this.employee);
      
   console.log(this.id);
      
      
      this.employeeService.updateEmployee(this.id, this.employee)
        .subscribe(data => {console.log(data);
          this.gotoList();  
        }, 
        error => {
          console.log(error);
          
        });
      
    
    }
  
    onSubmit() {
      this.updateEmployee();    
    }
  
    gotoList() {
      this.router.navigate(['/config-Maintenlist']);
    }
  
  
  }
  