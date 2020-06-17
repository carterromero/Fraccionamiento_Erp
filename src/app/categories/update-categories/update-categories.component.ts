import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/categories';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.scss']
})
export class UpdateCategoriesComponent implements OnInit {

  id: number;
  employee: Categories;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CategoriesService) { }

  ngOnInit() {

    this.employee = new Categories();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.categories_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.categories_status = (String(this.employee.categories_status) == "false") ? null:"false";
        console.log(this.employee.categories_status);
      }, error => {
        console.log(error);
        
      });
      


  }

   

  updateEmployee() {

    
    
    this.employee.last_update_by=3;
    console.log(this.employee);
    
 console.log(this.id);
    
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo la categoria correctamente";
      }, 
      error => {
        console.log(error);
        this.alertDisable = false;
        this.alertMessage = error['statusText'];
        
      });
    
  
  }

  onSubmit() {
    

    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.employee.categories_name =="" ||  this.employee.categories_name ==null ){
      this.alertDisable = false;
      this.alertMessage = "El nombre de la categoria esta incompleto";          
    }
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['categories-list']);
  }


}
