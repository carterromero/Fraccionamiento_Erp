
import { Component, OnInit } from '@angular/core';
import { PaymentRecord } from 'src/app/payment-record';
import { PaymentRecordService } from 'src/app/payment-record.service';
import { ActivatedRoute, Router } from '@angular/router';
import { STRING_TYPE } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Creditor } from 'src/app/creditor';
import { CreditorService } from 'src/app/creditor.service';
import { Billtopay } from 'src/app/billtopay';
import { Billtopayservice } from 'src/app/billtopay.service';
import { Payment } from 'src/app/payment';
import { PaytmentService } from 'src/app/paytment.service';


@Component({
  selector: 'app-create-payment-record',
  templateUrl: './create-payment-record.component.html',
  styleUrls: ['./create-payment-record.component.scss']
  
})
export class CreatePaymentRecordComponent implements OnInit {

  employee: PaymentRecord = new PaymentRecord();
  condominums: Observable<Condominums[]>;
  facturass: Observable<Billtopay[]>;
  fac: Billtopay= new Billtopay();
  creditor: Observable<Creditor[]>;
  general: Observable<Payment[]>;
  

  id: number;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos:String;
  submitted = false;
  
  factura : String;
  name : string;
  
  constructor(private employeeService: PaymentRecordService,
    private condominumsService: CondominumsService,
    private creditorService: CreditorService,
    private billtopayservice: Billtopayservice,
    private route: ActivatedRoute,
    private generalService: PaytmentService,
    private router: Router) {

      
     }

    ngOnInit() {
      this.reloadDatas();
      this.reloadDatas1() ;
      this.reloadDatas2() ;
      this.reloadData4();
      this.employee = new PaymentRecord();
     
      console.log(this.employee.payment_status = 'true');
      
    }

    newEmployee(): void {
      this.employee = new PaymentRecord();
      this.submitted = false;
    }
    

    reloadDatas() 
  {

    this.condominumsService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.condominums = this.condominumsService.getEmployeeListcombo();
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

    this.creditorService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.creditor= this.creditorService.getEmployeeList();
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
  reloadDatas2() 
  {
    
 
    this.billtopayservice.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.fac.billtopay_status = "true";
        console.log(this.fac.billtopay_status);
        this.fac.billtopay_status = (String(this.fac.billtopay_status) == "false") ? null:"false";
          this.facturass= this.billtopayservice.getEmployeeList(); 
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

  reloadData4() {
    
    this.generalService.getEmployeeList().subscribe(
      data => {
        this.general = this.generalService.getEmployeeList();
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


  reloadData6() {
    // this.name = this.route.firstChild.snapshot.params['name']
 
    this.name = this.route.firstChild.snapshot.params['name']
   
       console.log(this.name);
       this.employeeService.getEmployeefa(this.employee.billtopay_invoice_folio)
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

 
    save() {
      console.log( localStorage.getItem('condominums'));
      this.employee.condominums_id = localStorage.getItem('condominums');
      this.employee.p_userid = localStorage.getItem('id');
      console.log(this.employee);
    
      this.employeeService.createEmployee(this.employee)
        .subscribe(data => 
          {
            console.log(data);
            this.alertDisables = false;
            this.alertMessages ="Se inserto la acredor correctamente";
            this.employee= new PaymentRecord();
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

  
    this.submitted = true;
    this.save();    
  
 }

  gotoList() 
  {
    this.router.navigate(['payment-record-list']);
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.datos = reader.result.toString();
        this.employee.payment_method = this.datos.replace("data:application/pdf;base64,","")
     
     
    };
}

factu(){
  
    this.id = this.route.firstChild.snapshot.params['id']
    
}
  

}