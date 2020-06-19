import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/admin/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/admin/user.service';
import { Observable } from 'rxjs';
import { Rol } from 'src/app/services/admin/rol';
import { Condominums } from 'src/app/services/admin/condominums';
import { RolService } from 'src/app/services/admin/rol.service';
import { CondominumsService } from 'src/app/services/admin/condominums.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id: number;
  employee: User;  
  alertDisable = true;
  alertMessage = "null";


  
  submitted = false;
  addresses: Observable<Rol[]>;
  condominus: Observable<Condominums[]>;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: UserService,
    private addressService: RolService,
    private condService : CondominumsService ) { }

  ngOnInit() {
    this.employee = new User();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    this.reloadDatas();
    this.reloadDatasss();
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



  


  reloadDatasss() 
  {

    this.condService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.condominus = this.condService.getEmployeeListcombo();
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
