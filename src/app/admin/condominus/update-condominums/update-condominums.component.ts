import { Component, OnInit } from '@angular/core';
import { Condominums } from 'src/app/services/admin/condominums';
import { ActivatedRoute, Router } from '@angular/router';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { LegalsService } from 'src/app/services/admin/legals.service';
import { Observable } from 'rxjs';
import { Legals } from 'src/app/services/admin/legals';

@Component({
  selector: 'app-update-condominums',
  templateUrl: './update-condominums.component.html',
  styleUrls: ['./update-condominums.component.scss']
})
export class UpdateCondominumsComponent implements OnInit {

  id: number;
  employee: Condominums;
  addresses: Observable<Legals[]>;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CondominumsService ,
    private addressService: LegalsService
    
    ) { }

  ngOnInit() {

    this.employee = new Condominums();
    this.id = this.route.firstChild.snapshot.params['id']
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.condominums_status = (String(this.employee.condominums_status) == "false") ? null:"false";
        console.log(this.employee.condominums_status);
      }, error => {
        console.log(error);
      });
      this.reloadDatas() ;
  }

   

  updateEmployee() {

    this.employee.user_id="3";
    console.log(this.employee.condominums_status);
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {console.log(data);
        this.gotoList();  
      }, 
      error => {
        console.log(error);
        
      });
    
  
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
      }
    );      
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['condominus-list']);
  }

}
