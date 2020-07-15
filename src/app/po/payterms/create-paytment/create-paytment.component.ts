import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/payment';
import { PaytmentService } from 'src/app/paytment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-paytment',
  templateUrl: './create-paytment.component.html',
  styleUrls: ['./create-paytment.component.scss']
})
export class CreatePaytmentComponent implements OnInit {
employee: Payment = new Payment();
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: PaytmentService,
    private router: Router) { }
  

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Payment();
  }


  save() {

    this.employee.userid="3";
    console.log(this.employee);


    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {

          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto la categoria correctamente";
          this.employee= new Payment();
          console.log(data);
          this.gotoList();    
        }, 
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = "Este pago ya Existe";
        }  
        

         
      });

  }

  onSubmit() 
  {
   
    this.alertDisable = true;
  this.alertDisables = true;


  if(this.employee.payment_description =="" ||  this.employee.payment_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "Nombre Incompleto";          
  }
 
  else{
    this.save();
       
  }
  this.submitted = true; 
    
     
    
    

  }

  gotoList() 
  {
    this.router.navigate(['payment_terms-list']);
  }

}
