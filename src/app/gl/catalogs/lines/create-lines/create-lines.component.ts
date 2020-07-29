import { Component, OnInit } from '@angular/core';
import { LinesService } from "../../../../services/gl/lines.service";
import { Lines } from "../../../../services/gl/lines";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { AccolintypeService } from "../../../../services/gl/accolintype.service";
import { Accolintype } from "../../../../services/gl/accolintype";
import { AccountsService } from "../../../../services/gl/accounts.service";
import { Accounts } from "../../../../services/gl/accounts";
@Component({
  selector: 'app-create-lines',
  templateUrl: './create-lines.component.html',
  styleUrls: ['./create-lines.component.scss']
})
export class CreateLinesComponent implements OnInit {


  employee: Lines = new Lines();
  tipos: Observable<Accolintype[]>;
  cuenta: Observable<Accounts[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: LinesService,
    private tiposService: AccolintypeService,
    private cuentaService: AccountsService,
   
    private router: Router) { }

  ngOnInit() {
     
    this.reloadData();
    this.reloadData2();
  }

  reloadData() {
    
    this.tiposService.getEmployeeList().subscribe(
      data => {
        this.tipos = this.tiposService.getEmployeeList();
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
  reloadData2() {
    
    this.cuentaService.getEmployeeList().subscribe(
      data => {
        this.cuenta = this.cuentaService.getEmployeeList();
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

  newEmployee(): void {
    this.employee = new Lines();
  }

  save() {
    this.employee.created_by = localStorage.getItem('id');  
    this.employee.user_id="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto correctamente";
          this.employee= new Lines();
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

 

   if(this.employee.accounting_accounts_lines_parent_1 =="" ||  this.employee.accounting_accounts_lines_parent_1 ==null ){
    this.alertDisable = false;
    this.alertMessage = "parent_1 incompleta ";          
  }

  else if(this.employee.accounting_accounts_lines_parent_2 =="" ||  this.employee.accounting_accounts_lines_parent_2 ==null ){
    this.alertDisable = false;
    this.alertMessage = "parent_2 Incompleta";          
  }
  else if(this.employee.accounting_accounts_lines_parent_3 =="" ||  this.employee.accounting_accounts_lines_parent_3 ==null ){
    this.alertDisable = false;
    this.alertMessage = "parent_3 Incompleta";          
  }
  else if(this.employee.accounting_accounts_lines_children =="" ||  this.employee.accounting_accounts_lines_children ==null ){
    this.alertDisable = false;
    this.alertMessage = "lines_children Incompleta";          
  }
  else if(this.employee.accounting_accounts_lines_status =="" ||  this.employee.accounting_accounts_lines_status ==null ){
    this.alertDisable = false;
    this.alertMessage = "status Incompleta";          
  }
 

  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['lines-list']);
  }

}
