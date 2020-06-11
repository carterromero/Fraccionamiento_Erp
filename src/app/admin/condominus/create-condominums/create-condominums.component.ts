import { Component, OnInit } from '@angular/core';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Router } from '@angular/router';
import { Legals } from 'src/app/services/admin/legals';
import { Observable } from 'rxjs';
import { LegalsService } from 'src/app/services/admin/legals.service';

@Component({
  selector: 'app-create-condominums',
  templateUrl: './create-condominums.component.html',
  styleUrls: ['./create-condominums.component.scss']
})
export class CreateCondominumsComponent implements OnInit {

  employee: Condominums = new Condominums();
  submitted = false;
  addresses: Observable<Legals[]>;

  constructor(private employeeService: CondominumsService,
    private addressService: LegalsService,
    private router: Router) { }


  ngOnInit() {
    this.reloadDatas();
  }

  reloadDatas() 
  {

    this.addressService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.addresses = this.addressService.getEmployeeListcombo();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      }
    );      
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Condominums();
  }

  save() {

    this.employee.user_id="3";


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
    this.router.navigate(['condominus-list']);
  }


}
