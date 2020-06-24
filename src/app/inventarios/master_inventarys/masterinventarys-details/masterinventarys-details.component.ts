import { Component, OnInit } from '@angular/core';
import { MasterInventarys } from 'src/app/masterinventarys';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterInventarysService } from 'src/app/masterinventarys.service';
import { CondominumsService } from 'src/app/services/admin/condominums.service';

@Component({
  selector: 'app-masterinventarys-details',
  templateUrl: './masterinventarys-details.component.html',
  styleUrls: ['./masterinventarys-details.component.scss']
})
export class MasterinventarysDetailsComponent implements OnInit {
  id: number;
  employee: MasterInventarys;
  addresses: Observable<[MasterInventarys]>;
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: MasterInventarysService,
    private addressService: CondominumsService 
    
    ) { }

  ngOnInit() {
    
    this.employee = new MasterInventarys();    
    
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
