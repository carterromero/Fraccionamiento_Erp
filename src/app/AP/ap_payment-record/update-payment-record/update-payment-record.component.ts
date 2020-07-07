import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentRecord } from 'src/app/payment-record';
import { PaymentRecordService } from 'src/app/payment-record.service';


@Component({
  selector: 'app-update-payment-record',
  templateUrl: './update-payment-record.component.html',
  styleUrls: ['./update-payment-record.component.scss']
})
export class UpdatePaymentRecordComponent implements OnInit {
 
  
  id: number;
  employee: PaymentRecord;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos:String;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PaymentRecordService) { }

  ngOnInit() {

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
  
    if(this.employee.payment_record_payment_date =="" ||  this.employee.payment_record_payment_date ==null ){
      this.alertDisable = false;
      this.alertMessage = "Fecha de pago:  ";          
    }
  
    else if(this.employee.payment_record_amount =="" ||  this.employee.payment_record_amount ==null ){
      this.alertDisable = false;
      this.alertMessage = "monto";          
    }
  
    else if(this.employee.payment_method =="" ||  this.employee.payment_method ==null ){
      this.alertDisable = false;
      this.alertMessage = "Método de pago:";    
            
    }
    
    else{
      this.updateEmployee();    
    }


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
      event = this.employee.payment_record_amount;
     
    };
}
  

  

}

