import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/categories';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss']
})
export class CategoriesDetailsComponent implements OnInit {
  id: number;
  employee: Categories;
  alertDisable = true;
  alertMessage = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CategoriesService) { }

 ngOnInit() {
    this.employee = new Categories();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
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
}
