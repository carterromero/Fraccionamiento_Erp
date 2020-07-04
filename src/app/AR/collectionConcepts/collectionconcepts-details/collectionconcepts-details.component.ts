import { Component, OnInit } from '@angular/core';
import { CollectionConcepts } from 'src/app/collection-concepts';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionConceptsService } from 'src/app/collection-concepts.service';

@Component({
  selector: 'app-collectionconcepts-details',
  templateUrl: './collectionconcepts-details.component.html',
  styleUrls: ['./collectionconcepts-details.component.scss']
})
export class CollectionConceptsDetailsComponent implements OnInit {

  id: number;
  employee: CollectionConcepts;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CollectionConceptsService) { }

  ngOnInit() {
    this.employee = new CollectionConcepts();    
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
