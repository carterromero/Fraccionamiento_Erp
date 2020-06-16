import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/supplier';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/supplier.service';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.scss']
})
export class CreateSupplierComponent implements OnInit {

  employee: Supplier = new Supplier();
  submitted = false;

  constructor(private employeeService: SupplierService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Supplier();
  }

  save() {

    this.employee.userid="3";


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
    this.router.navigate(['supplier-list']);
  }

}
