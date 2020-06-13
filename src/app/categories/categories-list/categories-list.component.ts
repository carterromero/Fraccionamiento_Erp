import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';
import { Router } from '@angular/router';
import { Categories } from 'src/app/categories';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  general: Observable<Categories[]>;

  constructor(private generalService: CategoriesService,
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
    this.router.navigate(['categories-details', id]);
  }

  updateCategories(id: number){
    this.router.navigate(['update-categories', id]);
  }

}
