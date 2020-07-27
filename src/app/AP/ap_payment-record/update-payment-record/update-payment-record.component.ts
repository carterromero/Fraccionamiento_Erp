import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentRecord } from 'src/app/payment-record';
import { PaymentRecordService } from 'src/app/payment-record.service';
import { Creditor } from 'src/app/creditor';
import { CreditorService } from 'src/app/creditor.service';
import { Billtopay } from 'src/app/billtopay';
import { Billtopayservice } from 'src/app/billtopay.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-update-payment-record',
  templateUrl: './update-payment-record.component.html',
  styleUrls: ['./update-payment-record.component.scss']
})
export class UpdatePaymentRecordComponent implements OnInit {
 
  factura: Observable<Billtopay[]>;
  creditor: Observable<Creditor[]>;
  id: number;
  employee: PaymentRecord;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos:String;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private creditorService: CreditorService,
    private billtopayservice: Billtopayservice,
    private employeeService: PaymentRecordService) { }

  ngOnInit() {
    this.reloadDatas1() ;
    this.reloadDatas2() ;
    this.employee = new PaymentRecord();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.payment_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.payment_status = (String(this.employee.payment_status) == "false") ? null:"false";
        console.log(this.employee.payment_status);
      }, error => {
        console.log(error);let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
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
        this.factura= this.billtopayservice.getEmployeeList();
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

  updateEmployee() {

    
    console.log(this.employee.payment_status);
  
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo  correctamente";
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

  onSubmit() {
    

    this.alertDisable = true;
    this.alertDisables = true;
  
 
      this.updateEmployee();    
    


  }

  gotoList() {
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

  

}

