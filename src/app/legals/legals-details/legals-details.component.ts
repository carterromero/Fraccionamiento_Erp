import { Component, OnInit } from '@angular/core';
import { Legals } from 'src/app/legals';
import { ActivatedRoute, Router } from '@angular/router';
import { LegalsService } from 'src/app/legals.service';

@Component({
  selector: 'app-legals-details',
  templateUrl: './legals-details.component.html',
  styleUrls: ['./legals-details.component.scss']
})
export class LegalsDetailsComponent implements OnInit {

  id: number;
  employee: Legals;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: LegalsService) { }

  ngOnInit() {
    this.employee = new Legals();    
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
