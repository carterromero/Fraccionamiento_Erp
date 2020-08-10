import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/supplier.service';
import { Supplier } from 'src/app/supplier';
import { BankAccounts } from 'src/app/bankAccounts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.scss']
})
export class UpdateSupplierComponent implements OnInit {

  id: number;
  employee: Supplier;
  cuentas: Observable<BankAccounts[]>;
 
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
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
  
      this. reloadDatas()
  
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




  reloadDatas() 

  {

    this.employeeService.getEmployeeListCuentas().subscribe(
      data => {
        console.log(data);
        this.cuentas = this.employeeService.getEmployeeListCuentas();
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


  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['supplier-list']);
  }


}
