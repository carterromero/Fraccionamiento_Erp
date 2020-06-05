import { Component, OnInit } from '@angular/core';
import { General } from '../../general';
import { GeneralService } from '../../general.service';
import { Employee } from '../../employee';
import { EmployeeService } from '../../employee.service';
import { Address } from '../../address';
import { AddressService } from '../../address.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-update-general',
  templateUrl: './update-general.component.html',
  styleUrls: ['./update-general.component.scss']
})
export class UpdateGeneralComponent implements OnInit {

  id: number;
  general: General;
  employees: Observable<Employee[]>;
  addresses: Observable<Address[]>;

  constructor(private route: ActivatedRoute,private router: Router, private employeeServices: EmployeeService, private addressService: AddressService,private generalService: GeneralService) { }

  ngOnInit(): void {

    this.reloadData();
    this.reloadDatas(); 

    this.general = new General();
    //this.id = this.route.snapshot.params['id'];
    this.id = this.route.firstChild.snapshot.params['id'];
    console.log(this.id);

    this.generalService.getGeneral(this.id)
      .subscribe(data => {
        console.log(data)
        this.general = data;
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']); 
      }
    );
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

  updateGeneral() {
    this.generalService.updateGeneral(this.id, this.general)
      .subscribe(data => {console.log(data);
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
    this.updateGeneral();
  }

  gotoList() {
    this.router.navigate(['/general-list']);
  }
}