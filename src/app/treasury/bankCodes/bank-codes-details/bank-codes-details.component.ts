import { Component, OnInit } from '@angular/core';
import { BankCodes } from '../../../bankCodes';
import { ActivatedRoute, Router } from '@angular/router';
import { BankCodesService } from '../../../bank-codes.service';

@Component({
  selector: 'app-bank-codes-details',
  templateUrl: './bank-codes-details.component.html',
  styleUrls: ['./bank-codes-details.component.scss']
})
export class BankCodesDetailsComponent implements OnInit {
  id: number;
  employee: BankCodes;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: BankCodesService) { }

  ngOnInit() {
    this.employee = new BankCodes();    
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
