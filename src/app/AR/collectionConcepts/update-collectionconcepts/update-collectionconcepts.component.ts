import { Component, OnInit } from '@angular/core';
import { CollectionConcepts } from 'src/app/collection-concepts';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionConceptsService } from 'src/app/collection-concepts.service';


@Component({
  selector: 'app-update-collectionconcepts',
  templateUrl: './update-collectionconcepts.component.html',
  styleUrls: ['./update-collectionconcepts.component.scss']
})
export class CollectionConceptsUpdateComponent implements OnInit {

  id: number;
  employee: CollectionConcepts;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CollectionConceptsService) { }

  ngOnInit() {

    this.employee = new CollectionConcepts();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.collection_concepts_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.collection_concepts_status = (String(this.employee.collection_concepts_status) == "false") ? null:"false";
        console.log(this.employee.collection_concepts_status);
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
    console.log(this.employee.collection_concepts_status);
    
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
  
    if(this.employee.collection_concepts_concept_name =="" ||  this.employee.collection_concepts_concept_name ==null ){
      this.alertDisable = false;
      this.alertMessage = "Nombre Incompleto";          
    }
  
    else if(this.employee.collection_concepts_description =="" ||  this.employee.collection_concepts_description ==null ){
      this.alertDisable = false;
      this.alertMessage = "Descripcion Incompleta";          
    }
  
    else if(this.employee.collection_concepts_unit_measurement =="" ||  this.employee.collection_concepts_unit_measurement ==null ){
      this.alertDisable = false;
      this.alertMessage = "Unidad Incompleta";          
    }
  
  
    else if(this.employee.collection_concepts_price ==null ||  this.employee.collection_concepts_price ==null ){
      this.alertDisable = false;
      this.alertMessage = "precio Incompleta";          
    }
  
    else if(this.employee.collection_concepts_accounting_income_account =="" ||  this.employee.collection_concepts_accounting_income_account ==null ){
      this.alertDisable = false;
      this.alertMessage = "cuentas Incompleta";          
    }
    
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['collectionconcepts-list']);
  }

}
