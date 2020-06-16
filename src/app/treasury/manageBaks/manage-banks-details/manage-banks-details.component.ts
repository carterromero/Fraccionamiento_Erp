import { Component, OnInit } from '@angular/core';
import { ManageBanks } from '../../../manageBank';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageBanksService } from '../../../manage-banks.service';

@Component({
  selector: 'app-manage-banks-details',
  templateUrl: './manage-banks-details.component.html',
  styleUrls: ['./manage-banks-details.component.scss']
})
export class ManageBanksDetailsComponent implements OnInit {
  id: number;
  employee: ManageBanks;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: ManageBanksService) { }

  ngOnInit() {
    this.employee = new ManageBanks();    
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
