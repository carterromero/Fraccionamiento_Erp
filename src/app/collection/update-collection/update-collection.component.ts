import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/collection';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/collection.service';


@Component({
  selector: 'app-update-collection',
  templateUrl: './update-collection.component.html',
  styleUrls: ['./update-collection.component.scss']
})
export class UpdateCollectionComponent implements OnInit {

  id: number;
  employee: Collection;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CollectionService) { }

  ngOnInit() {

    this.employee = new Collection();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.collection_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.collection_status = (String(this.employee.collection_status) == "false") ? null:"false";
        console.log(this.employee.collection_status);
      }, error => {
        console.log(error);let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
  }

   

  updateEmployee() {

    //this.employee.userid="3";
    console.log(this.employee.collection_status);
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo la empresa correctamente";
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
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['collection-list']);
  }

}
