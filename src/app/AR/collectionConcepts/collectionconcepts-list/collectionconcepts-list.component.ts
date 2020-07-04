import { Component, OnInit } from '@angular/core';
import { CollectionConceptsService } from 'src/app/collection-concepts.service';
import { Router } from '@angular/router';
import { CollectionConcepts } from 'src/app/collection-concepts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-collectionconcepts-list',
  templateUrl: './collectionconcepts-list.component.html',
  styleUrls: ['./collectionconcepts-list.component.scss']
})
export class CollectionConceptsListComponent implements OnInit {

  general: Observable<CollectionConcepts[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: CollectionConceptsService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployeeList().subscribe(
      data => {
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
    this.alertDisable = true;
    this.alertDisables = true;
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages ="La concepto de pago se a eliminado correctamente";
        },
        error => {
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }  
        }
      );
  }

  generalDetails(id: number){
    this.router.navigate(['collectionconcepts-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-collectionconcepts', id]);
  }

}
