import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BankAccounts } from '../../../bankAccounts';
import { BankAccountsService } from '../../../bank-accounts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {

  creditor: Observable<BankAccounts[]>;
  id: number;
  employee: Client;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private bankAccountsService: BankAccountsService,
    private employeeService: ClientService) { }

  ngOnInit() {

    this.reloadDatas1() ;
    this.employee = new Client();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.cliente_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.cliente_status = (String(this.employee.cliente_status) == "false") ? null:"false";
        console.log(this.employee.cliente_status);
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

    this.bankAccountsService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.creditor= this.bankAccountsService.getEmployeeList();
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

    this.employee.user_id="3";
    console.log(this.employee.cliente_status);
    
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
  
    if(this.employee.cliente_name_cliente =="" ||  this.employee.cliente_name_cliente ==null ){
      this.alertDisable = false;
      this.alertMessage = "Nombre Incompleto";          
    }
  
    
  
    else if(this.employee.cliente_direccion =="" ||  this.employee.cliente_direccion ==null ){
      this.alertDisable = false;
      this.alertMessage = "direccion Incompleta";          
    }
  

  
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['creditor-list']);
  }

}


