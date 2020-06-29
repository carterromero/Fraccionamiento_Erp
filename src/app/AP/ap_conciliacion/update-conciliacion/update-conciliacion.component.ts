import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conciliacion } from 'src/app/conciliacion';
import { ConciliacionService } from 'src/app/conciliacion.service';

@Component({
  selector: 'app-update-conciliacion',
  templateUrl: './update-conciliacion.component.html',
  styleUrls: ['./update-conciliacion.component.scss']
})
export class UpdateConciliacionComponent implements OnInit {

  id: number;
  employee: Conciliacion;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: ConciliacionService) { }

  ngOnInit() {

    this.employee = new Conciliacion();
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

    this.employee.user_id="3";
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
    this.router.navigate(['conciliacion-list']);
  }

  

  

}

