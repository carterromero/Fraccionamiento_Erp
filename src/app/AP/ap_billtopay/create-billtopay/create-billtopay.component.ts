import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Billtopay } from 'src/app/billtopay';
import { Billtopayservice } from 'src/app/billtopay.service';
import { PurcharseService } from 'src/app/purcharse.service';
import { Purcharse } from 'src/app/purcharse';
import { BankAccounts } from '../../../bankAccounts';
import { BankAccountsService } from '../../../bank-accounts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Creditor } from 'src/app/creditor';
import { CreditorService } from 'src/app/creditor.service';

@Component({
  selector: 'app-create-billtopay',
  templateUrl: './create-billtopay.component.html',
  styleUrls: ['./create-billtopay.component.scss']
})
export class CreateBilltopayComponent implements OnInit {
  creditor: Observable<BankAccounts[]>;
  employee: Billtopay = new Billtopay();
  purcharse: Observable<Purcharse[]>;
  credito: Observable<Creditor[]>;
  employees: Billtopay = new Billtopay();
  
name : string;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos:String;
  creditor_business_name:String;
  cliente_name_cliente :String;
  constructor(private employeeService: Billtopayservice,
    private purcharseService: PurcharseService,
    private bankAccountsService: BankAccountsService,
    private employeesService: CreditorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.reloadDatas();
    this.reloadDatas1();
   
    
  }

  reloadDatas() 
  {

    this.employeeService.getEmployeebill().subscribe(
      data => {
        console.log(data);
        this.purcharse = this.employeeService.getEmployeebill();
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

 
  

  reloadData2() {
   // this.name = this.route.firstChild.snapshot.params['name']

   this.name = this.route.firstChild.snapshot.params['name']
   console.log(this.name);
      this.employeeService.getEmployeed(this.employee.creditor_business_name)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
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
   
      reloadData3() {
          // this.name = this.route.firstChild.snapshot.params['name']
       
          this.cliente_name_cliente = this.route.firstChild.snapshot.params['name']
          this.cliente_name_cliente = localStorage.getItem('tutorial');
             console.log(this.cliente_name_cliente);
             this.employeeService.getEmployeecl(this.employee.cliente_name_cliente)
               .subscribe(data => {
                 console.log(data);
                 this.employee = data;
                 localStorage.setItem('usuario', JSON.stringify(this.cliente_name_cliente));
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

 

reloadDatas1() 
{

  this.employeesService.getEmployeeList().subscribe(
    data => {
      console.log(data);
      this.credito= this.employeesService.getEmployeeList();
      console.log(this.creditor_business_name);
    },
    error => {
      console.log(error);
      let coins = [];
      for (let key in error) {
        this.alertMessage = error['statusText'];          
      }
    }
  )
  
       
}




  newEmployee(): void {
    this.employee = new Billtopay();
  }


  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.datos = reader.result.toString();
        this.employee.bilitoplay_arch = this.datos.replace("data:application/pdf;base64,","")
      /*  this.employee.employees_contract = this.datos.replace("data:application/pdf;base64,","")*/
        event = this.employee.bilitoplay_arch;
      /*  event = this.employee.employees_contract*/
     
    };
}



  save() {
    console.log( localStorage.getItem('condominums'));
    this.employee.condominums_id = localStorage.getItem('condominums');
    this.employee.p_userid = (localStorage.getItem('id'));
    console.log(this.employee);
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto la factura correctamente";
          this.employee= new Billtopay();  
          localStorage.setItem('usuario', JSON.stringify(this.cliente_name_cliente));
        }, 
      error => {
        console.log(error);    
        let coins = [];
        
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = "No se puede agregar el nombre esta duplicado";      
        }      
      });
  }

  onSubmit() 
  {

  this.alertDisable = true;
  this.alertDisables = true;

  if(this.employee.billtopay_invoice_folio == "" ||  this.employee.billtopay_invoice_folio ==null ){
    this.alertDisable = false;
    this.alertMessage = "campo Incompleto o repetido";          
  }



  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['billtopay-list']);
  }



}