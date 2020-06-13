import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankCodesService } from '../../../bank-codes.service';
import { BankCodes } from '../../../bankCodes';

@Component({
  selector: 'app-update-bank-codes',
  templateUrl: './update-bank-codes.component.html',
  styleUrls: ['./update-bank-codes.component.scss']
})
export class UpdateBankCodesComponent implements OnInit {

  id: number;
  employee: BankCodes;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: BankCodesService) { }

  ngOnInit() {

    this.employee = new BankCodes();
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

    //this.employee.userid="3";
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
    this.router.navigate(['bank-codes-list']);
  }


}
