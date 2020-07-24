import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/supplier';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/supplier.service';
import { BankAccounts } from 'src/app/bankAccounts';
import { Observable } from 'rxjs';
import { BankAccountsService } from 'src/app/bank-accounts.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.scss']
})
export class SupplierDetailsComponent implements OnInit {
  id: number;
  



cuentas : BankAccounts = new BankAccounts();



employee: Supplier = new Supplier();
submitted = false;



cuentass: Observable<BankAccounts[]>;
alertDisable = true;
alertDisables = true;
alertMessage = "null";
alertMessages = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: SupplierService
    , private cuentaServivec: BankAccountsService )

     { }



   

  ngOnInit() {
    this.employee = new Supplier();    
    this.cuentas = new BankAccounts();  
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
     
     this.reloadDatas()
     
      });


     

  }
 
  reloadDatas() 
  {
    
   
    this.cuentaServivec.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.cuentass= this.cuentaServivec.getEmployeeList();
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







}
