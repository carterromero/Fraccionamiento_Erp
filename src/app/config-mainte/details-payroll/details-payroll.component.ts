import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Configmainte } from 'src/app/configmainte';
import { ConfigmainteService } from 'src/app/configmainte.service';

@Component({
  selector: 'app-details-payroll',
  templateUrl: './details-payroll.component.html',
  styleUrls: ['./details-payroll.component.scss']
})
export class DetailsPayrollComponent implements OnInit {
  id: number;
  employee: Configmainte;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: ConfigmainteService) { }

  ngOnInit() {
    this.employee = new Configmainte();    
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
