import { Component, OnInit } from '@angular/core';
import { SubCategories } from 'src/app/subcategories';
import { Categories } from 'src/app/categories';
import { Observable } from 'rxjs';
import { SubCategoriesService } from 'src/app/subcategories.service';
import { CategoriesService } from 'src/app/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-subcategories',
  templateUrl: './create-subcategories.component.html',
  styleUrls: ['./create-subcategories.component.scss']
})
export class CreateSubcategoriesComponent implements OnInit {

  employee: SubCategories = new SubCategories();
  submitted = false;
  addresses: Observable<Categories[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: SubCategoriesService,
    private addressService: CategoriesService,
    private router: Router) { }


  ngOnInit() {
    this.reloadDatas();
  }

  reloadDatas() 
  {

    this.addressService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.addresses = this.addressService.getEmployeeListcombo();
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
          this.alertMessages ="Se inserto la Sub Categoria correctamente";
          this.employee  = new SubCategories();
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
  if(this.employee.sub_categories_name =="" ||  this.employee.sub_categories_name ==null ){
    this.alertDisable = false;
    this.alertMessage = "Descripción Incompleto";          
  }
  else if(this.employee.inv_categories_id =="" ||  this.employee.inv_categories_id ==null ){
    this.alertDisable = false;
    this.alertMessage = "Sub Categoria Incompleta";          
  }
  else{
    this.save();    
  } 
  }

  gotoList() 
  {
    this.router.navigate(['sub_categories-list']);
  }

}
