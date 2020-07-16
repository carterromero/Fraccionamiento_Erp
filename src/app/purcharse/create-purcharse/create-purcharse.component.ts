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
import { UserService } from 'src/app/services/admin/user.service';
import { User } from 'src/app/services/admin/user';
import { Authentication } from 'src/app/authentication';
import { AuthenticationService } from 'src/app/authentication.service';
import { PermissionsService } from 'src/app/services/admin/permissions.service';

@Component({
  selector: 'app-create-purcharse',
  templateUrl: './create-purcharse.component.html',
  styleUrls: ['./create-purcharse.component.scss']
})
export class CreatePurcharseComponent implements OnInit {
  authentication: User = new User(); 
  permisions:Permissions =  new Permissions();
  employee: Purcharse = new Purcharse();
  submitted = false;
  suppliers: Observable<Supplier[]>;
  payments: Observable<Payment[]>;
  articlesc : Observable<ArticlesC[]>;
  categorias :Observable<CategoriasC[]>;
  authentications : Observable<Authentication []>;


  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: PurcharseService,
    private suppliersService: SupplierService,
    private paymentService: PaytmentService,
    private categoriesService : CategoriesService,
    private authenticationService : AuthenticationService,
    private generalService: PermissionsService,
    
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



  authenticate() 
  {    
    this.authenticationService.login(this.authentication)
      .subscribe(data => 
        {
        this.authentication = data;
        console.log(this.authentication);
        if(this.authentication.user_id != 0)
        {
          localStorage.setItem('id', this.authentication.user_id.toString());
          localStorage.setItem('rol', this.authentication.rol_id.toString());
          localStorage.setItem('condominums', this.authentication.condominums_id.toString());
          
          
          this.generalService.getEmployeeP(this.permisions)
            .subscribe(data => {
              console.log("aqui es navigator");
              this.permisions = new Permissions();
              this.permisions = data;
              console.log(this.permisions);
           ;   
            }, error => {
              console.log(error);
             
            });


        
            
        }
        else
        {
          this.alertDisable = false;
          this.alertMessage = 'Usuario y Contraseña Incorrecta';               
        }
      },
      error => {console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }    
      });            
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
  if(this.employee.purcharse_order_categories_id =="" ||  this.employee.purcharse_order_categories_id ==null ){
    this.alertDisable = false;
            
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
