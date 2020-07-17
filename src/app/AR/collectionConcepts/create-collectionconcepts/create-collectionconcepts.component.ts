import { Component, OnInit } from '@angular/core';
import { CollectionConcepts } from 'src/app/collection-concepts';
import { CollectionConceptsService } from 'src/app/collection-concepts.service';

import { Articles } from 'src/app/articles';
import { ArticlesService } from 'src/app/articles.service';
import { LinesService } from "src/app/services/gl/lines.service";
import { Lines } from "src/app/services/gl/lines";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-collection-concepts',
  templateUrl: './create-collectionconcepts.component.html',
  styleUrls: ['./create-collectionconcepts.component.scss']
})
/* 
collection_id
codigoarticulo=sku
accounting_accounts_id
pucharse_id
*/
export class CollectionConceptsCreateComponent implements OnInit {

  employee: CollectionConcepts = new CollectionConcepts();
  Articles:Observable<Articles[]>
  Lines:Observable<Lines[]>
  Liness: Lines=new Lines();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(
    private employeeService: CollectionConceptsService,
    private ArticlesService:ArticlesService,
    private LinesService:LinesService,
    private router: Router) { }

  ngOnInit() {
    this.reloadDatas();
  }

  newEmployee(): void {
    this.employee = new CollectionConcepts();
  }

  reloadDatas() 
  {
    this.ArticlesService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.Articles = this.ArticlesService.getEmployeeList();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];          
        }
      }
    );
    this.LinesService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.Lines = this.LinesService.getEmployeeList();
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

  save() {

    this.employee.created_by = Number(localStorage.getItem('id'));
    this.employee.condominums_id=Number(localStorage.getItem('id'));
   // this.employee.accounting_accounts_id=Number(localStorage.getItem('id'));
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto el cobro correctamente";
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