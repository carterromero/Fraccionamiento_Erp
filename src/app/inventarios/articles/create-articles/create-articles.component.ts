import { Component, OnInit } from '@angular/core';
import { Articles } from 'src/app/articles';
import { Observable } from 'rxjs';
import { UnitOfMeasuresService } from 'src/app/unit-of-measures.service ';
import { SubCategories } from 'src/app/subcategories';
import { SubCategoriesService } from 'src/app/subcategories.service';
import { Router } from '@angular/router';
import { UnitOfMeasures } from 'src/app/unit-of-measures';
import { ArticlesService } from 'src/app/articles.service';

@Component({
  selector: 'app-create-articles',
  templateUrl: './create-articles.component.html',
  styleUrls: ['./create-articles.component.scss']
})
export class CreateArticlesComponent implements OnInit {

 
  employee: Articles = new Articles();
  submitted = false;
  addresses: Observable<[SubCategories]>;
  addresses1: Observable<[UnitOfMeasures]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: ArticlesService,
    private addressService: SubCategoriesService,
    private address1Service: UnitOfMeasuresService,
    private router: Router) { }


  ngOnInit() {
    this.reloadDatas();
  }

  reloadDatas() 
  {

    this.addressService.getEmployeeListcombo_sub().subscribe(
      data => {
        console.log(data);
        this.addresses = this.addressService.getEmployeeListcombo_sub();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      }
    );   
    
    this.address1Service.getEmployee1Listcombo().subscribe(
      data => {
        console.log(data);
        this.addresses1 = this.address1Service.getEmployee1Listcombo();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      }
    );   
  }

  save()
   {this.employee.last_update_by=3;
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto Correctamente";
          this.employee  = new Articles();
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
  if(this.employee.articles_name_article =="" ||  this.employee.articles_name_article ==null ){
    this.alertDisable = false;
    this.alertMessage = "Nombre Incompleto";          
  }
  else if(this.employee.articles_description =="" ||  this.employee.articles_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "Articulos Descripción Incompleta";          
  }
  else if(this.employee.unit_of_measuares_id =="" ||  this.employee.unit_of_measuares_id ==null ){
    this.alertDisable = false;
    this.alertMessage = "Unidad de Medida Incompleta";          
  }
  else if(this.employee.articles_dimension =="" ||  this.employee.articles_dimension ==null ){
    this.alertDisable = false;
    this.alertMessage = "Articulos Dimension Incompleta";          
  }
  else if(this.employee.articles_articles_price ==null ||  this.employee.articles_articles_price ==null ){
    this.alertDisable = false;
    this.alertMessage = "Precio de Artículos Incompleta";          
  }
  else if(this.employee.articles_external_feactures =="" ||  this.employee.articles_external_feactures ==null ){
    this.alertDisable = false;
    this.alertMessage = "Características Externas Incompleta";          
  }
  else if(this.employee.articles_internal_characteristics =="" ||  this.employee.articles_internal_characteristics ==null ){
    this.alertDisable = false;
    this.alertMessage = "Características Internas Incompleta";          
  }
  
  else{
    console.log(this.employee);
   this.save();    
    
  } 
  }

  gotoList() 
  {
    this.router.navigate(['sub_categories-list']);
  }

}
