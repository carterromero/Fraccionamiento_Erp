import { Component, OnInit } from '@angular/core';
import { BankCodes } from '../../../bankCodes';
import { Router } from '@angular/router';
import { BankCodesService } from '../../../bank-codes.service';

@Component({
  selector: 'app-create-bank-codes',
  templateUrl: './create-bank-codes.component.html',
  styleUrls: ['./create-bank-codes.component.scss']
})
export class CreateBankCodesComponent implements OnInit {

  employee: BankCodes = new BankCodes();
  submitted = false;

  constructor(private employeeService: BankCodesService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new BankCodes();
  }

  save() {

    //this.employee.userid="3";


    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.gotoList();    
        }, 
      error => {
        console.log(error);    
      });

  }

  onSubmit() 
  {
    this.submitted = true;
    this.save();    
  }

  gotoList() 
  {
    this.router.navigate(['bank-codes-list']);
  }

}
