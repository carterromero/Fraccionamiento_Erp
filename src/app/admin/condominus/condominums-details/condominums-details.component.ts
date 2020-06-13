import { Component, OnInit } from '@angular/core';
import { Condominums } from 'src/app/services/admin/condominums';
import { ActivatedRoute, Router } from '@angular/router';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Observable } from 'rxjs';
import { Legals } from 'src/app/services/admin/legals';
import { LegalsService } from 'src/app/services/admin/legals.service';

@Component({
  selector: 'app-condominums-details',
  templateUrl: './condominums-details.component.html',
  styleUrls: ['./condominums-details.component.scss']
})
export class CondominumsDetailsComponent implements OnInit {

  id: number;
  employee: Condominums;
  addresses: Observable<Legals[]>;
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CondominumsService,
    private addressService: LegalsService 
    
    ) { }

  ngOnInit() {
    this.employee = new Condominums();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    this.reloadDatas() ;
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }

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
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }
}
