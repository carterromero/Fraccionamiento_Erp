import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/supplier';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/supplier.service';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.scss']
})
export class CreateSupplierComponent implements OnInit {

  employee: Supplier = new Supplier();
  submitted = false;
  
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: SupplierService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Supplier();
  }

  save() {

    this.employee.userid="3";


    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {


          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto la Proveedor  correctamente";
          this.employee= new Supplier();
          console.log(data);
          this.gotoList();   
        }, 
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = "Este proveedor ya existe";  
        
        }
        error => {
          console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = "Este proveedor ya existe";
          } 
        }
      });

  }

  onSubmit() 
  {


      
    this.alertDisable = true;
  this.alertDisables = true;


   
  if(this.employee.supplier_name =="" ||  this.employee.supplier_name ==null ){
    this.alertDisable = false;
    this.alertMessage = "Nombre Incompleto";          
  
  } 
  else if  (this.employee.supplier_rfc =="" ||  this.employee.supplier_rfc ==null ){
   this.alertDisable = false;
   this.alertMessage = "RFC INCOMPLETO";          
 }
  
 
  else{
    this.save();
       
  }
  this.submitted = true; 
    
      
       
  }


  onSubmits() 
  {


      
    this.alertDisable = true;
  this.alertDisables = true;


   
  if(this.employee.supplier_phone <=9999999999 ||  this.employee.supplier_phone ==null ){
    this.alertDisable = false;
    this.alertMessage = "numero mayor a 10";          
 
  }else{
    this.save();
       
  }
  this.submitted = true; 
    
      
       
  }




  gotoList() 
  {
    this.router.navigate(['supplier-list']);
  }

}
