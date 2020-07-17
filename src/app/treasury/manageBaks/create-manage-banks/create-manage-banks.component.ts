import { Component, OnInit } from '@angular/core';
import { ManageBanks } from '../../../manageBank';
import { Router } from '@angular/router';
import { ManageBanksService } from '../../../manage-banks.service';
import { BankCodes } from '../../../bankCodes';
import { BankCodesService } from '../../../bank-codes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-manage-banks',
  templateUrl: './create-manage-banks.component.html',
  styleUrls: ['./create-manage-banks.component.scss']
})
export class CreateManageBanksComponent implements OnInit {

  employee: ManageBanks = new ManageBanks();
  codes: Observable<BankCodes[]>;
  submitted = false;

  constructor(private employeeService: ManageBanksService,
    private router: Router, private bankcodesService:BankCodesService) { }

  ngOnInit() {
    //code
    this.reloadData();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new ManageBanks();
  }

  reloadData() {
    
    this.bankcodesService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.codes = this.bankcodesService.getEmployeeList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });

      
  }
  save() {

    this.employee.created_by= Number(localStorage.getItem('id'));
    this.employee.created_by = Number(localStorage.getItem('id'));

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
    this.router.navigate(['manage-banks-list']);
  }

}
