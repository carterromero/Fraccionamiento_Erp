import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/admin/user';
import { Tenants } from 'src/app/tenants';
import { Condominums } from 'src/app/services/admin/condominums';
import { Observable } from 'rxjs';
import { Purcharse } from 'src/app/purcharse';
import { Supplier } from 'src/app/supplier';
import { PurcharseService } from 'src/app/purcharse.service';
import { Payment } from 'src/app/payment';
import { ArticlesC } from 'src/app/articlesc';
import { CategoriasC } from 'src/app/categoriasc';
import { SupplierService } from 'src/app/supplier.service';
import { PaytmentService } from 'src/app/paytment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { UserService } from 'src/app/services/admin/user.service';
import { TenantsService } from 'src/app/tenants.service';
import { PermissionsService } from 'src/app/services/admin/permissions.service';
import { Authentication } from 'src/app/authentication';
import { TransactionService } from 'src/app/services/admin/transaction.service';
import { TransactionsEntrys } from 'src/app/transactionsentrys';
import { MasterInventarys } from 'src/app/masterinventarys';
import { Pricearticulo } from 'src/app/pricearticles';
import { Status } from 'src/app/status';
import { SubInventarys } from 'src/app/subinventarys';

@Component({
  selector: 'app-create-entrys',
  templateUrl: './create-entrys.component.html',
  styleUrls: ['./create-entrys.component.scss']
})
export class CreateEntrysComponent implements OnInit 
{

  id: number;
  name : string;
  user: User = new User();
  authentication: User = new User(); 
  //teha: Tenants = new Tenants(); 
  condo: Condominums = new Condominums();
  userss: Observable<User[]>;
  employee: TransactionsEntrys = new TransactionsEntrys();
  submitted = false;
  purcharse: Observable<Purcharse[]>;
  Condo: Observable<Condominums[]>;
  payments: Observable<Payment[]>;
  
  authentications : Observable<Authentication []>;
  master : Observable<MasterInventarys []>;
  precio : Observable<Pricearticulo[]>;
  teha : Observable<Tenants[]>;
  status : Observable<Status []>;
  sub : Observable<SubInventarys []>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: TransactionService,
    private purchar: PurcharseService,
    private paymentService: PaytmentService,
    private route: ActivatedRoute,
    private categoriesService : CategoriesService,
    private authenticationService : AuthenticationService,
    private generalService: PermissionsService,
    private userService:UserService,
    
    private tha:TenantsService,
    private router: Router) { }


  ngOnInit() 
  {
    
    this.reloadDatas();
    this.reloadDatass();
    this.reloadDatasss();
    this.reloadDatassss();
    this.ReEstatus();
    this.SubInventa();
  //  this.users();

  }

  reloadDatas() 
  {
   
    this.employeeService.getEmployeeListPurcharse(parseInt(localStorage.getItem('condominums'))).subscribe(
      data => {
        console.log(data);
        this.purcharse = this.employeeService.getEmployeeListPurcharse(parseInt(localStorage.getItem('condominums')));
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

    this.employeeService.getEmployeeListMaster(parseInt(localStorage.getItem('condominums'))).subscribe(
      data => {
        console.log(data);
        this.master = this.employeeService.getEmployeeListMaster(parseInt(localStorage.getItem('condominums')));
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
  //PrecioStatus
 reloadDatasss() 
  {

    this.employeeService.getEmployeeListStatusPrec().subscribe(
      data => {
        console.log(data);
        this.precio = this.employeeService.getEmployeeListStatusPrec();
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

  

  reloadData3()
  {
    // this.name = this.route.firstChild.snapshot.params['name']

    this.employee.condominiuns_id=localStorage.getItem('condominums');
   // this.reloadDatas();
   
    this.employee.condominiuns_id=localStorage.getItem('condominums');
    this.employee.p_condominiuns_id=parseInt(localStorage.getItem('condominums'));
    this.employeeService.getEOneAricleButton(this.employee.purcharse_id,this.employee.p_condominiuns_id)
 
  //  this.name = this.route.firstChild.snapshot.params['name']
     //  this.employeeService.getEOneAricleButton(this.employee.purcharse_id)
         .subscribe(data => 
          {
           console.log(data);
           this.employee = data;
           console.log('Trajo Datos');
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

 //Than

 reloadDatassss() 
  {

    this.employeeService.getTenantList().subscribe(
      data => {
        console.log(data);
        this.teha = this.employeeService.getTenantList();
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



  SubInventa() 
  {

    this.employeeService. getEmployeeListSubI().subscribe(
      data => {
        console.log(data);
        this.sub = this.employeeService. getEmployeeListSubI();
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






  ReEstatus() 
  {

    this.employeeService. getEmployeeListEstatus().subscribe(
      data => {
        console.log(data);
        this.status = this.employeeService. getEmployeeListEstatus();
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
    this.employee.transactions_entrys_condominium=localStorage.getItem('condominums');
    this.employee.tipo_transation="entrada"
    console.log(this.employee);
    
       this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto Transaccion";
          this.employee = new TransactionsEntrys ();
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
  this.save();    
   
  }

  gotoList() 
  {
    this.router.navigate(['purchase_orders-list']);
  }


}
