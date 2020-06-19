import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/collection.service';
import { Router } from '@angular/router';
import { collection } from 'src/app/collection';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class collectionListComponent implements OnInit {

  general: Observable<collection[]>;

  constructor(private CollectionService: CollectionService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.CollectionService.getCollectionList().subscribe(
      data => {
        console.log("getcollection");
        console.log(data);
        this.general = this.CollectionService.getCollectionList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });

      
  }

  deleteGeneral(id: number) {
    this.CollectionService.deleteCollection(id)
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
    this.router.navigate(['collection-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-collection', id]);
  }

}
