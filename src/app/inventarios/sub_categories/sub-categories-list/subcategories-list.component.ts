import { Component, OnInit } from '@angular/core';
import { SubCategoriesService } from 'src/app/subcategories.service';
import { Router } from '@angular/router';
import { SubCategories } from 'src/app/subcategories';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/categories';

@Component({
  selector: 'app-sub-categories-list',
  templateUrl: './subcategories-list.component.html',
  styleUrls: ['./subcategories-list.component.scss']
})
export class SubCategoriesListComponent implements OnInit {

  general: Observable<SubCategories[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

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
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });

      
  }

  deleteGeneral(id: number) {
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages ="La sub categoria se a eliminado correctamente";
        },
        error => {console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
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
