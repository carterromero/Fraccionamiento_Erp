import { Component, OnInit } from '@angular/core';
import { Transfers } from '../../../transfers';
import { ActivatedRoute, Router } from '@angular/router';
import { TransfersService } from '../../../transfers.service';

@Component({
  selector: 'app-transfers-details',
  templateUrl: './transfers-details.component.html',
  styleUrls: ['./transfers-details.component.scss']
})
export class TransfersDetailsComponent implements OnInit {
  id: number;
  employee: Transfers;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: TransfersService) { }

  ngOnInit() {
    this.employee = new Transfers();    
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
