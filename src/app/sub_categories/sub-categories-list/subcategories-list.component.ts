import { Component, OnInit } from '@angular/core';
import { SubCategoriesService } from 'src/app/subcategories.service';
import { Router } from '@angular/router';
import { SubCategories } from 'src/app/subcategories';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-categories-list',
  templateUrl: './subcategories-list.component.html',
  styleUrls: ['./subcategories-list.component.scss']
})
export class SubCategoriesListComponent implements OnInit {

  general: Observable<SubCategories[]>;

  constructor(private generalService: SubCategoriesService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeeList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });

      
  }

  deleteGeneral(id: number) {
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => {console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']); 
        }
      );
  }

  generalDetails(id: number){
console.log(id);
    this.router.navigate(['sub-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-subcategories', id]);
  }
}
