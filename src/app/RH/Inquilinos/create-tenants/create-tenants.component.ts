import { Component, OnInit } from '@angular/core';
import { TenantsService } from 'src/app/tenants.service';
import { Tenants } from 'src/app/tenants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tenants',
  templateUrl: './create-tenants.component.html',
  styleUrls: ['./create-tenants.component.scss']
})
export class CreateTenantsComponent implements OnInit {
  
  tenant: Tenants = new Tenants();
  submitted = false;

  constructor(private departmentService:TenantsService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.tenant = new Tenants();
  }

  save() {
    this.departmentService.createTenant(this.tenant)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
       // localStorage.setItem('token', "");
     //   this.router.navigate(['auth/signin']);
      });
    this.tenant = new Tenants();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['tenants-list']);
  }
}