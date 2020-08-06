import { Component, OnInit } from '@angular/core';
import { Purcharse } from 'src/app/purcharse';
import { Observable } from 'rxjs';
import { PurcharseService } from 'src/app/purcharse.service';
import { Supplier } from 'src/app/supplier';
import { Payment } from 'src/app/payment';
import { SupplierService } from 'src/app/supplier.service';
import { Router, ActivatedRoute } from '@angular/router';
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
import { Tenants } from 'src/app/tenants';
import { TenantsService } from 'src/app/tenants.service';

@Component({
  selector: 'app-create-purcharse',
  templateUrl: './create-purcharse.component.html',
  styleUrls: ['./create-purcharse.component.scss']
})
export class CreatePurcharseComponent implements OnInit {
  id: number;
  
  name : string;
  user: User = new User();
  authentication: User = new User(); 
  teha: Tenants = new Tenants(); 
  condo: Condominums = new Condominums();
  userss: Observable<User[]>;
  employee: Purcharse = new Purcharse();
  submitted = false;
  suppliers: Observable<Supplier[]>;
  

  Condo: Observable<Condominums[]>;
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
    private route: ActivatedRoute,
    private categoriesService : CategoriesService,
    private authenticationService : AuthenticationService,
    private generalService: PermissionsService,
    private userService:UserService,
    private tha:TenantsService,
    private router: Router) { }


  ngOnInit() {
    
    this.reloadDatas();
    this.reloadDatass();
    this.reloadDatasss();
    //this.reloadDatassss();
    this.users();

  }

  reloadDatas() 
  {
    this.condo.condominums_description = localStorage.getItem('condominums');
    this.teha.tenants_name = localStorage.getItem('inquilino');
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

  

  reloadData3() {
    // this.name = this.route.firstChild.snapshot.params['name']


    this.employee.admin_condominiuns_id=localStorage.getItem('condominums');
   // this.reloadDatas();
   
    this.employee.admin_condominiuns_id=localStorage.getItem('condominums');
    this.employee.p_condominiuns_id=parseInt(localStorage.getItem('condominums'));
    this.employeeService.getEOneAricleButton(this.employee.articles_sku,this.employee.p_condominiuns_id)
 
  //  this.name = this.route.firstChild.snapshot.params['name']
     //  this.employeeService.getEOneAricleButton(this.employee.purcharse_id)
         .subscribe(data => {
          console.log('Trajo Datos');
           console.log(data);
           this.employee = data;
           
           this.alertDisable = true;
           
         },
         error => {
           console.log(error);
           let coins = [];
           for (let key in error) {
             console.log("Error");
             this.alertMessage = error['statusText'];          
           }
         }
       ); 
    
   } 

javq(event){



this.reloadData3()
}

 

 /* reloadDatassss() 
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
*/

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
          this.alertMessages ="Se inserto Orden de Compra";
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




  users() 
  {
    this.user.user_name = localStorage.getItem('name');
  
    this.employeeService.getOneUser(this.id).subscribe(
      data => {
        console.log(data);
        this.userss = this.employeeService.getOneUser(this.id);
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }

  onSubmit() 
  {
  this.alertDisable = true;
  this.alertDisables = true;
  
  
  
    this.save();    
   
  }

  gotoList() 
  {
    this.router.navigate(['purchase_orders-list']);
  }


}
