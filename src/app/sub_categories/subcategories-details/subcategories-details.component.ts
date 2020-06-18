import { Component, OnInit } from '@angular/core';
import { SubCategories } from 'src/app/subcategories';
import { Categories } from 'src/app/categories';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoriesService } from 'src/app/subcategories.service';
import { CategoriesService } from 'src/app/categories.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subcategories-details',
  templateUrl: './subcategories-details.component.html',
  styleUrls: ['./subcategories-details.component.scss']
})
export class SubcategoriesDetailsComponent implements OnInit {

  id: number;
  employee: SubCategories;
  addresses: Observable<Categories[]>;
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: SubCategoriesService,
    private addressService: CategoriesService 
    
    ) { }

  ngOnInit() {
    
    this.employee = new SubCategories();    
    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    this.reloadDatas() ;
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
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
}
