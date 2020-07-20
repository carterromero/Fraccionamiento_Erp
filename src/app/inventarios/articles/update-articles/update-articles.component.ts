import { Component, OnInit } from '@angular/core';
import { Articles } from 'src/app/articles';
import { Observable } from 'rxjs';
import { UnitOfMeasures } from 'src/app/unit-of-measures';
import { SubCategories } from 'src/app/subcategories';
import { ArticlesService } from 'src/app/articles.service';
import { SubCategoriesService } from 'src/app/subcategories.service';
import { UnitOfMeasuresService } from 'src/app/unit-of-measures.service ';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-articles',
  templateUrl: './update-articles.component.html',
  styleUrls: ['./update-articles.component.scss']
})
export class UpdateArticlesComponent implements OnInit {

  id: number;
  admin_condominiuns_id:number;
  employee: Articles;
  addresses: Observable<[SubCategories]>;
  addresses1: Observable<UnitOfMeasures[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: ArticlesService,
    private addressService: SubCategoriesService,
    private address1Service: UnitOfMeasuresService
    
    ) { }

  ngOnInit() {
    
    this.employee.admin_condominiuns_id=localStorage.getItem('condominums')
    this.employee = new Articles();
   
    this.id = this.route.firstChild.snapshot.params['id']
    this.admin_condominiuns_id = this.route.firstChild.snapshot.params['admin_condominiuns_id']
    this.employeeService.getEmployee(this.id,this.admin_condominiuns_id)
      .subscribe(data => {
        this.employee = data;
        this.employee.articles_skus = (String(this.employee.articles_skus) == "false") ? null:"true";
        console.log(this.employee.articles_skus);
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }

      });
      this.reloadDatas() ;
  }

   

  updateEmployee() {
    //this.reservation.last_update_by=Number(localStorage.getItem('id'));
    this.employee.last_update_by=Number(localStorage.getItem('id'));
    this.employee.admin_condominiuns_id=localStorage.getItem('condominums')
    this.employee.last_update_by=3;
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo el Articulo correctamente";  
      }, 
      error => 
      {
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
      this.updateEmployee();    
    }
  }

  gotoList() {
    this.router.navigate(['Articles-list']);
  }
}
