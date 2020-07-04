import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/status';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusService } from 'src/app/status.service';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.scss']
})
export class UpdateStatusComponent implements OnInit {

  id: number;
  employee: Status;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: StatusService) { }

  ngOnInit() {

    this.employee = new Status();
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

    
    console.log(this.employee.status);
    
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
    this.router.navigate(['status-articles-list']);
  }


}
