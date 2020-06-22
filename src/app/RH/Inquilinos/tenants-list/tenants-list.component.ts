import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TenantsService } from "src/app/tenants.service";
import { Tenants } from "src/app/tenants";
import { Router } from '@angular/router';

@Component({
  selector: "app-tenants-list",
  templateUrl: "./tenants-list.component.html",
  styleUrls: ["./tenants-list.component.scss"]
})
export class TenantsListComponent implements OnInit {
  tenants: Observable<Tenants[]>;
  elements: any = [];

  constructor(private tenantService: TenantsService,
    private router: Router) {}

  ngOnInit() {    
    this.reloadData();

    for (let i = 1; i <= 11; i++) {
      this.elements.push({
        id: i,
        first: {nick: 'Nick ' + i, name: 'Name ' + i},
        last: 'Name ' + i,
        handle: 'Handle ' + i
      });
    }
  }

  reloadData() {
    /*localStorage.setItem('token', "");*/
    /*this.employees = this.employeeService.getEmployeeList();*/
    this.tenantService.getTenantList().subscribe(
      data => {
        console.log(data);
        this.tenants = this.tenantService.getTenantList();
      },
      error => {
        console.log(error);
       // localStorage.setItem('token', "");
       // this.router.navigate(['auth/signin']);     
      });
  }

  deleteTenant(id: number) {
    this.tenantService.deleteTenant(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => {
          console.log(error);
         // localStorage.setItem('token', "");
         // this.router.navigate(['auth/signin']);
        });
  }

  tenantDetails(id: number){
    console.log(id);
    this.router.navigate(['tenants-details', id]);
  }

  updateTenant(id: number){
    console.log(id);
    this.router.navigate(['update-tenants', id]);
  }
}