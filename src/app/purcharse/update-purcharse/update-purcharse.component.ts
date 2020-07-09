import { Component, OnInit } from '@angular/core';
import { Purcharse } from 'src/app/purcharse';
import { Observable } from 'rxjs';
import { ArticlesC } from 'src/app/articlesc';
import { ActivatedRoute, Router } from '@angular/router';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Supplier } from 'src/app/supplier';
import { Payment } from 'src/app/payment';
import { LegalsService } from 'src/app/services/admin/legals.service';
import { PurcharseService } from 'src/app/purcharse.service';
import { SupplierService } from 'src/app/supplier.service';
import { PaytmentService } from 'src/app/paytment.service';

@Component({
  selector: 'app-update-purcharse',
  templateUrl: './update-purcharse.component.html',
  styleUrls: ['./update-purcharse.component.scss']
})
export class UpdatePurcharseComponent implements OnInit {
  id: number;
  employee: Purcharse = new Purcharse();

  submitted = false;
  suppliers: Observable<Supplier[]>;
  payments: Observable<Payment[]>;
  articlesc : Observable<ArticlesC[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PurcharseService,
    private supplierService: SupplierService,
    private paymentService: PaytmentService,
    
    ) { }

  ngOnInit() {

    this.employee = new Purcharse();
    this.id = this.route.firstChild.snapshot.params['id']
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => 
        {
        console.log(data);
        this.employee = data;
        this.employee.purcharse_status = (String(this.employee.purcharse_status) == "false") ? null:"true";
        console.log(this.employee.purcharse_status);
        },
       error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }

      });
      
      this.reloadDatas() ;
     this.reloadDatasss();
     this.reloadDatass();
  }

   

  updateEmployee() 
  {

    this.employee.userid=localStorage.getitem('id');;
    console.log(this.employee)
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo la empresa correctamente";  
      }, 
      error => 
      {
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

    this.supplierService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.suppliers = this.supplierService.getEmployeeListcombo();
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



  reloadDatass() 
  {

    this.paymentService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.payments = this.paymentService.getEmployeeListcombo();
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

    this.employeeService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.articlesc = this.employeeService.getEmployeeListcombo();
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
    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.employee.purcharse_name =="" ||  this.employee.purcharse_name ==null ){
      this.alertDisable = false;
      this.alertMessage = "Nombre Incompleto";          
    }
  
    else if(this.employee.supplier_id =="" ||  this.employee.supplier_id ==null ){
      this.alertDisable = false;
      this.alertMessage = "Dirección Incompleta";          
    }
  
    else{
      this.updateEmployee();    
    }
  }

  gotoList() {
    this.router.navigate(['purchase_orders-list']);
  }


}
