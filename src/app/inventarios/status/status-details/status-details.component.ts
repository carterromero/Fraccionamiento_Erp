import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/status';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusService } from 'src/app/status.service';

@Component({
  selector: 'app-status-details',
  templateUrl: './status-details.component.html',
  styleUrls: ['./status-details.component.scss']
})
export class StatusDetailsComponent implements OnInit {

  id: number;
  employee: Status;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: StatusService) { }



   

  ngOnInit() {
    this.employee = new Status();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });

    }
}
