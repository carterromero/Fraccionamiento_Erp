import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/collection';
import { CollectionService } from 'src/app/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss']
})

export class CreateCollectionComponent implements OnInit {

  employee: Collection = new Collection();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: CollectionService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new Collection();
  }

  save() {

    //this.employee.userid="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto la Cobro correctamente";
          this.employee= new Collection();
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

  if(this.employee.collection_transaction_type =="" ||  this.employee.collection_transaction_type ==null ){
    this.alertDisable = false;
    this.alertMessage = "•	Tipo de transacción Incompleto";          
  }

  else if(this.employee.collection_name_resident =="" ||  this.employee.collection_name_resident ==null ){
    this.alertDisable = false;
    this.alertMessage = "•	Nombre del Residente Incompleta";          
  }

  else if(this.employee.collection_payment_term =="" ||  this.employee.collection_payment_term ==null ){
    this.alertDisable = false;
    this.alertMessage = "•	Termino de pago  Incompleta";          
  }


  else if(this.employee.collection_collection_concept =="" ||  this.employee.collection_collection_concept ==null ){
    this.alertDisable = false;
    this.alertMessage = "•	Concepto de cobro  Incompleta";          
  }

  else if(this.employee.collection_amount ==null ||  this.employee.collection_amount ==null ){
    this.alertDisable = false;
    this.alertMessage = "•	Importe Incompleta";          
  }
  
  else if(this.employee.collection_referral_address =="" ||  this.employee.collection_referral_address ==null ){
    this.alertDisable = false;
    this.alertMessage = "•	Dirección de remisión Incompleta";          
  }
  else if(this.employee.condominums_id ==null ||  this.employee.condominums_id ==null ){
    this.alertDisable = false;
    this.alertMessage = "condominums_id Incompleta";          
  }

  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['collection-list']);
  }

}