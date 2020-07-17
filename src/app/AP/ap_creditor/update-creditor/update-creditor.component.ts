import { Component, OnInit } from '@angular/core';
import { CreditorService } from 'src/app/creditor.service';
import { Creditor } from 'src/app/creditor';
import { ActivatedRoute, Router } from '@angular/router';
import { BankAccounts } from '../../../bankAccounts';
import { BankAccountsService } from '../../../bank-accounts.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-update-creditor',
  templateUrl: './update-creditor.component.html',
  styleUrls: ['./update-creditor.component.scss']
})
export class UpdateCreditorComponent implements OnInit {

  creditor: Observable<BankAccounts[]>;
  id: number;
  employee: Creditor;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private bankAccountsService: BankAccountsService,
    private employeeService: CreditorService) { }

  ngOnInit() {

    this.reloadDatas1() ;
    this.employee = new Creditor();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.creditor_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.creditor_status = (String(this.employee.creditor_status) == "false") ? null:"false";
        console.log(this.employee.creditor_status);
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
    console.log(this.employee.creditor_status);
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo acreedor correctamente";
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
  
    if(this.employee.creditor_business_name =="" ||  this.employee.creditor_business_name ==null ){
      this.alertDisable = false;
      this.alertMessage = "Nombre Incompleto";          
    }
  
    else if(this.employee.creditor_addres =="" ||  this.employee.creditor_addres ==null ){
      this.alertDisable = false;
      this.alertMessage = "Dirección Incompleta";          
    }
  
    else if(this.employee.creditor_turn =="" ||  this.employee.creditor_turn ==null ){
      this.alertDisable = false;
      this.alertMessage = "Giro Incompleta";          
    }
  

  
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['creditor-list']);
  }

}

