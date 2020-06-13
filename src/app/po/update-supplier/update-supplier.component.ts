import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/supplier.service';
import { Supplier } from 'src/app/supplier';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.scss']
})
export class UpdateSupplierComponent implements OnInit {

  id: number;
  employee: Supplier;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: SupplierService) { }

  ngOnInit() {

    this.employee = new Supplier();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.supplier_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.supplier_status = (String(this.employee.supplier_status) == "false") ? null:"false";
        console.log(this.employee.supplier_status);
      }, error => {
        console.log(error);
      });
  }

   

  updateEmployee() {

    this.employee.userid="3";
    console.log(this.employee.supplier_status);
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {console.log(data);
        this.gotoList();  
      }, 
      error => {
        console.log(error);
        
      });
    
  
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['supplier-list']);
  }


}
