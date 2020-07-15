import { Component, OnInit } from '@angular/core';
import { Purcharse } from 'src/app/purcharse';
import { Observable } from 'rxjs';
import { PurcharseService } from 'src/app/purcharse.service';
import { Supplier } from 'src/app/supplier';
import { Payment } from 'src/app/payment';
import { SupplierService } from 'src/app/supplier.service';
import { Router } from '@angular/router';
import { PaytmentService } from 'src/app/paytment.service';
import { Condominums } from 'src/app/services/admin/condominums';
import { ArticlesC } from 'src/app/articlesc';
import { Categories } from 'src/app/categories';
import { CategoriesService } from 'src/app/categories.service';
import { CategoriasC } from 'src/app/categoriasc';

@Component({
  selector: 'app-create-purcharse',
  templateUrl: './create-purcharse.component.html',
  styleUrls: ['./create-purcharse.component.scss']
})
export class CreatePurcharseComponent implements OnInit {

  employee: Purcharse = new Purcharse();
  submitted = false;
  suppliers: Observable<Supplier[]>;
  payments: Observable<Payment[]>;
  articlesc : Observable<ArticlesC[]>;
  categorias :Observable<CategoriasC[]>;

  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: PurcharseService,
    private suppliersService: SupplierService,
    private paymentService: PaytmentService,
    private categoriesService : CategoriesService,
    
    private router: Router) { }


  ngOnInit() {
    
    this.reloadDatas();
    this.reloadDatass();
    this.reloadDatasss();
    this.reloadDatassss();
  }

  reloadDatas() 
  {

    this.suppliersService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.suppliers = this.suppliersService.getEmployeeListcombo();
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



  reloadDatassss() 
  {

    this.employeeService.getEmployeeListcomboC().subscribe(
      data => {
        console.log(data);
        this.categorias = this.employeeService.getEmployeeListcomboC();
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


  save()
   {
    //this.employee.userid = localStorage.getItem('id');
    this.employee.admin_condominiuns_id=localStorage.getItem('condominums');
    
    console.log(this.employee);
    
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto Ordenn de pago";
          this.employee = new Purcharse();
        }, 
      error => {
        console.log(error);  
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }    
      });



  }

  onSubmit() 
  {
  this.alertDisable = true;
  this.alertDisables = true;
  if(this.employee.purcharse_name =="" ||  this.employee.purcharse_name ==null ){
    this.alertDisable = false;
    this.alertMessage = "-- ";          
  }
  
  else{
    this.save();    
  } 
  }

  gotoList() 
  {
    this.router.navigate(['purchase_orders-list']);
  }


}
