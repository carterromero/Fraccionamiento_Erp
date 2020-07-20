import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Billtopay } from 'src/app/billtopay';
import { Billtopayservice } from 'src/app/billtopay.service';
import { PurcharseService } from 'src/app/purcharse.service';
import { Purcharse } from 'src/app/purcharse';

@Component({
  selector: 'app-create-billtopay',
  templateUrl: './create-billtopay.component.html',
  styleUrls: ['./create-billtopay.component.scss']
})
export class CreateBilltopayComponent implements OnInit {

  employee: Billtopay = new Billtopay();
  purcharse: Observable<Purcharse[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos:String;

  constructor(private employeeService: Billtopayservice,
    private purcharseService: PurcharseService,
    private router: Router) { }

  ngOnInit() {
    this.reloadDatas();
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