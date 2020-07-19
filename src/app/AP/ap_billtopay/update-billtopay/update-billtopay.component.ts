import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Billtopay } from 'src/app/billtopay';
import { Billtopayservice } from 'src/app/billtopay.service';

@Component({
  selector: 'app-update-billtopay',
  templateUrl: './update-billtopay.component.html',
  styleUrls: ['./update-billtopay.component.scss']
})
export class UpdateBilltopayComponent implements OnInit {
  id: number;
  employee: Billtopay;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos :string;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: Billtopayservice) { }

  ngOnInit() {

    this.employee = new Billtopay();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.billtopay_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.billtopay_status = (String(this.employee.billtopay_status) == "false") ? null:"false";
        console.log(this.employee.billtopay_status);
      }, error => {
        console.log(error);let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
  }
  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.datos = reader.result.toString();
        this.employee.bilitoplay_arch = this.datos.replace("data:application/pdf;base64,","")
        event = this.employee.bilitoplay_arch;
      /*  this.employee.employees_contract = this.datos.replace("data:application/pdf;base64,","")*/
       // event = this.employee.employees_cv;
      //  event = this.employee.employees_contract;
     
    };
}
   

  updateEmployee() {

    this.employee.p_userid="3";
    console.log(this.employee.billtopay_status);
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo la FACTURA correctamente";
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
  
    if(this.employee.billtopay_invoice_folio =="" ||  this.employee.billtopay_invoice_folio ==null ){
      this.alertDisable = false;
      this.alertMessage = "Folio de Factura ";          
    }
  
    else if(this.employee.billtopay_invoice_date =="" ||  this.employee.billtopay_invoice_date ==null ){
      this.alertDisable = false;
      this.alertMessage = "Fecha de Factura";          
    }
  
    else if(this.employee.billtopay_scheduled_payment_date =="" ||  this.employee.billtopay_scheduled_payment_date ==null ){
      this.alertDisable = false;
      this.alertMessage = "Fecha de pago programada";          
    }
  
  
    else if(this.employee.billtopay_amount =="" ||  this.employee.billtopay_amount ==null ){
      this.alertDisable = false;
      this.alertMessage = "Monto";          
    }
  
    else if(this.employee.billtopay_service_description =="" ||  this.employee.billtopay_service_description ==null ){
      this.alertDisable = false;
      this.alertMessage = "Descripción del bien o servicio adquirido";          
    }
  
   
  
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['legals-list']);
  }

}
