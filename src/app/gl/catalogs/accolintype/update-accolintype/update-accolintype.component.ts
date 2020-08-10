import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AccolintypeService } from "../../../../services/gl/accolintype.service";
import { Accolintype } from "../../../../services/gl/accolintype";
@Component({
  selector: 'app-update-accolintype',
  templateUrl: './update-accolintype.component.html',
  styleUrls: ['./update-accolintype.component.scss']
})
export class UpdateAccolintypeComponent implements OnInit {


  p_id: number;
  employee: Accolintype;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: AccolintypeService) { }

  ngOnInit() {

    this.employee = new Accolintype();
    this.p_id = this.route.firstChild.snapshot.params['p_id']
    console.log(this.employee.accounting_accounts_types_status);
    this.employeeService.getEmployee(this.p_id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.accounting_accounts_types_status = (String(this.employee.accounting_accounts_types_status) == "false") ? null:"false";
        console.log(this.employee.accounting_accounts_types_status);
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
    console.log(this.employee.accounting_accounts_types_status);
    
    this.employeeService.updateEmployee(this.p_id, this.employee)
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
  
   
    if(this.employee.accounting_accounts_types_name =="" ||  this.employee.accounting_accounts_types_name ==null ){
      this.alertDisable = false;
      this.alertMessage = "nombre incompleta ";          
    }
  
    else if(this.employee.accounting_accounts_types_description =="" ||  this.employee.accounting_accounts_types_description ==null ){
      this.alertDisable = false;
      this.alertMessage = "descripcion Incompleta";          
    }
  
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['accolintype-list']);
  }

}

