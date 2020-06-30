import { Component, OnInit } from '@angular/core';
import { UnitOfMeasures } from 'src/app/unit-of-measures';
import { Observable } from 'rxjs';
import { UnitOfMeasuresService } from 'src/app/unit-of-measures.service ';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-of-measures-list',
  templateUrl: './unit-of-measures-list.component.html',
  styleUrls: ['./unit-of-measures-list.component.scss']
})
export class UnitOfMeasuresListComponent implements OnInit {
  general: Observable<UnitOfMeasures[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: UnitOfMeasuresService,
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
          this.alertMessages ="La Unidad de Medida se a eliminado correctamente";
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
    this.router.navigate(['unit-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-subcategories', id]);
  }

}
