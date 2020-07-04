import { Component, OnInit } from '@angular/core';
import { CollectionConcepts } from 'src/app/collection-concepts';
import { CollectionConceptsService } from 'src/app/collection-concepts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-collection-concepts',
  templateUrl: './create-collectionconcepts.component.html',
  styleUrls: ['./create-collectionconcepts.component.scss']
})

export class CollectionConceptsCreateComponent implements OnInit {

  employee: CollectionConcepts = new CollectionConcepts();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: CollectionConceptsService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new CollectionConcepts();
  }

  save() {

    //this.employee.userid="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto la empresa correctamente";
          this.employee= new CollectionConcepts();
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

  if(this.employee.collection_concepts_concept_name =="" ||  this.employee.collection_concepts_concept_name ==null ){
    this.alertDisable = false;
    this.alertMessage = "Nombre Incompleto";          
  }

  else if(this.employee.collection_concepts_description =="" ||  this.employee.collection_concepts_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "Dirección Incompleta";          
  }

  else if(this.employee.collection_concepts_unit_measurement =="" ||  this.employee.collection_concepts_unit_measurement ==null ){
    this.alertDisable = false;
    this.alertMessage = "Descripción Incompleta";          
  }


  else if(this.employee.collection_concepts_price ==null||  this.employee.collection_concepts_price ==null ){
    this.alertDisable = false;
    this.alertMessage = "RFC Incompleta";          
  }

  else if(this.employee.collection_concepts_accounting_income_account =="" ||  this.employee.collection_concepts_accounting_income_account ==null ){
    this.alertDisable = false;
    this.alertMessage = "Registro Patronal Incompleta";          
  }

  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['collectionconcepts-list']);
  }

}