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
  general: Observable<Billtopay[]>;
  credi: Observable<Creditor[]>;
  credito:Creditor = new Creditor();
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

    this.purcharseService.getEmployeeList(1).subscribe(
      data => {
        console.log(data);
        this.purcharse = this.purcharseService.getEmployeeList(1);
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

      console.log(this.name);
      this.employeesService.getEmployeed(this.credito.creditor_business_name)
        .subscribe(data2 => {
          console.log(data2);
          this.credito = data2;
        });
   
  } 

  reloadData3() {
    this.name = this.route.firstChild.snapshot.params['name']
    console.log(this.name);
    this.employeeService.getEmployeecl(this.employee.cliente_name_cliente)
      .subscribe(data3 => {
        console.log(data3);
        this.employee = data3;
      });
    
} 

reloadDatas1() 
{

  this.employeesService.getEmployeeList().subscribe(
    data => {
      console.log(data);
      this.credi= this.employeesService.getEmployeeList();
      console.log(this.creditor_business_name);
      
      if (this.creditor_business_name == this.employee.creditor_business_name )
      this.reloadData2()
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
    this.employee.p_userid="3";
    console.log(this.employee);
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto la factura correctamente";
          this.employee= new Billtopay();
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

 

  gotoList() 
  {
    this.router.navigate(['billtopay-list']);
  }



}