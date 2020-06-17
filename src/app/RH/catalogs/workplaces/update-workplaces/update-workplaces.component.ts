import { Component, OnInit } from '@angular/core';
import { WorkplacesService } from "src/app/workplaces.service";
import { Workplaces } from "src/app/workplaces";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-workplaces',
  templateUrl: './update-workplaces.component.html',
  styleUrls: ['./update-workplaces.component.scss']
})
export class UpdateWorkplacesComponent implements OnInit {

  id: number;
  employee: Workplaces;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: WorkplacesService) { }

  ngOnInit() {
    this.employee = new Workplaces();


    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.workplaces_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.workplaces_status = (String(this.employee.workplaces_status) == "false") ? null:"false";
        console.log(this.employee.workplaces_status);
      }, error => {
        console.log(error);
        
      });
      
  }

  updateEmployee() {

    
    
    this.employee.last_update_by=3;
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
    this.router.navigate(['workplaces-list']);
  }


}
