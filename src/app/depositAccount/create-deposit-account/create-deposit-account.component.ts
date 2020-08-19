import { Component, OnInit } from '@angular/core';
import { DepositAccount } from 'src/app/depositAccount';
import { DepositAccountService } from 'src/app/deposit-account.service';
import { CollectionConcepts } from 'src/app/collection-concepts';
import { CollectionConceptsService } from 'src/app/collection-concepts.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-deposit-account',
  templateUrl: './create-deposit-account.component.html',
  styleUrls: ['./create-deposit-account.component.scss']
})

export class CreateDepositAccountComponent implements OnInit {
///condominio
///collection
//validacion ver los bancos (falta tesoreria completar)
  employee: DepositAccount = new DepositAccount();
  CollectionConcepts:CollectionConcepts=new CollectionConcepts();
  CollectionConceptss:Observable<CollectionConcepts[]>
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(
    private employeeService: DepositAccountService,
    private CollectionConceptsService:CollectionConceptsService,
    private router: Router) { }

  ngOnInit() {
    this.reloadDatas();
  }

  newEmployee(): void {
    this.employee = new DepositAccount();
  }

  save() {

    this.employee.condominums_id = Number(localStorage.getItem('condominums'));
    this.employee.created_by = Number(localStorage.getItem('id'));
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto la transación correctamente";
          this.employee= new DepositAccount();
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
  reloadDatas() 
  {
    this.CollectionConceptsService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.CollectionConceptss = this.CollectionConceptsService.getEmployeeList();
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
  onSubmit() 
  {

  this.alertDisable = true;
  this.alertDisables = true;

  if(this.employee.deposit_account_name_deposit_account =="" ||  this.employee.deposit_account_name_deposit_account ==null ){
    this.alertDisable = false;
    this.alertMessage = "	Nombre de la Cuenta de Deposito. Incompleto";          
  }

  else if(this.employee.deposit_account_description =="" ||  this.employee.deposit_account_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "		Descripción  Incompleta";          
  }

  else if(this.employee.deposit_account_bank =="" ||  this.employee.deposit_account_bank ==null ){
    this.alertDisable = false;
    this.alertMessage = "		BancoIncompleta";          
  }


  else if(this.employee.deposit_account_branch_office =="" ||  this.employee.deposit_account_branch_office ==null ){
    this.alertDisable = false;
    this.alertMessage = "	Sucursal Incompleta";          
  }
  else if(this.employee.deposit_account_bill =="" ||  this.employee.deposit_account_bill ==null ){
    this.alertDisable = false;
    this.alertMessage = "		Cuenta Incompleta";          
  }

  else if(this.employee.deposit_account_card ==null ||  this.employee.deposit_account_card ==null ){
    this.alertDisable = false;
    this.alertMessage = "	Tarjeta Incompleta";          
  }

  else if(this.employee.deposit_account_key ==null ||  this.employee.deposit_account_key ==null ){
    this.alertDisable = false;
    this.alertMessage = "	Clave Incompleta";          
  }
  else if(this.employee.collection_concepts_id ==null ||  this.employee.collection_concepts_id ==null ){
    this.alertDisable = false;
    this.alertMessage = "	collection_concepts_id Incompleta";          
  }




  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['DepositAccount-list']);
  }

}