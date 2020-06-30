import { Component, OnInit } from '@angular/core';
import { SubCategories } from 'src/app/subcategories';
import { Categories } from 'src/app/categories';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoriesService } from 'src/app/subcategories.service';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'app-update-subcategories',
  templateUrl: './update-subcategories.component.html',
  styleUrls: ['./update-subcategories.component.scss']
})
export class UpdateSubcategoriesComponent implements OnInit {

  id: number;
  employee: SubCategories;
  addresses: Observable<Categories[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: SubCategoriesService,
    private addressService: CategoriesService
    
    ) { }

  ngOnInit() {

    this.employee = new SubCategories();
    this.id = this.route.firstChild.snapshot.params['id']
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        this.employee = data;
        this.employee.sub_categories_status = (String(this.employee.sub_categories_status) == "false") ? null:"false";
        console.log(this.employee.sub_categories_status);
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
    this.employee.last_update_by=3;
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo la sub categoria correctamente";  
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
  onSubmit() {
    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.employee.sub_categories_name =="" ||  this.employee.sub_categories_name ==null ){
      this.alertDisable = false;
      this.alertMessage = "Sub Categoria Incompleto";          
    }
  
    else if(this.employee.inv_categories_id =="" ||  this.employee.inv_categories_id ==null ){
      this.alertDisable = false;
      this.alertMessage = "Categoria Incompleta";          
    }
  
    
  
  
    else{
      this.updateEmployee();    
    }
  }

  gotoList() {
    this.router.navigate(['sub_categories-list']);
  }
}
