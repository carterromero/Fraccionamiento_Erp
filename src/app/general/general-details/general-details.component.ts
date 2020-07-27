import { Component, OnInit} from '@angular/core';
import { General } from '../../general';
import { GeneralService } from '../../general.service';
import { Employee } from "../../employee";
import { EmployeeService } from "../../employee.service";
import { Address } from "../../address";
import { AddressService } from "../../address.service";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.scss']
})
export class GeneralDetailsComponent implements OnInit {

  id: number;
  general: General;
  employees: Observable<Employee[]>;
  addresses: Observable<Address[]>;

  constructor(private route: ActivatedRoute,private router: Router, private generalService: GeneralService,private employeeService: EmployeeService, private addressService: AddressService) { }

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
      }, error => {console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']); 
      });

  }


  reloadData() {

    this.employeeService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.employees = this.employeeService.getEmployeeList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });
  
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
      });  
  }
  
  list(){
    this.router.navigate(['general']);
  }

}