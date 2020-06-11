import { Component, OnInit } from '@angular/core';
import { Creditor } from 'src/app/creditor';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditorService } from 'src/app/creditor.service';


@Component({
  selector: 'app-creditor-details',
  templateUrl: './creditor-details.component.html',
  styleUrls: ['./creditor-details.component.scss']
})
export class CreditorDetailsComponent implements OnInit {
 
  id: number;
  employee: Creditor;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CreditorService) { }

  ngOnInit() {
    this.employee = new Creditor();    
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
