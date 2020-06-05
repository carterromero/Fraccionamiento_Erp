import { Component, OnInit } from '@angular/core';
import { General } from '../../general';
import { GeneralService } from '../../general.service';
import { Employee } from '../../employee';
import { EmployeeService } from '../../employee.service';
import { Address } from '../../address';
import { AddressService } from '../../address.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-create-general',
  templateUrl: './create-general.component.html',
  styleUrls: ['./create-general.component.scss']
})
export class CreateGeneralComponent implements OnInit {
  
  submitted = false;
  general: General = new General();  
  employees: Observable<Employee[]>;
  addresses: Observable<Address[]>;
  
  constructor(private generalService: GeneralService, private router: Router,private employeeServices: EmployeeService, private addressService: AddressService) { }

  ngOnInit() {
    this.reloadData();
    this.reloadDatas();
  }

  reloadData() {

    this.employeeServices.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.employees = this.employeeServices.getEmployeeList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      }
    );  
  }

  reloadDatas() 
  {

    this.addressService.getAddressList().subscribe(
      data => {
        console.log(data);
        this.addresses = this.addressService.getAddressList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      }
    );      
  }



  save() {
    this.generalService.createGeneral(this.general)
      .subscribe(data => {
        console.log(data);
        this.general = new General();
        this.gotoList();
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']); 
      }
    );    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['general-list']);
  }
}