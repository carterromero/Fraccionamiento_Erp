import { Component, OnInit } from '@angular/core';
import { collection } from 'src/app/collection';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/collection.service';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.scss']
})
export class collectionDetailsComponent implements OnInit {

  id: number;
  collection: collection;

  constructor(private route: ActivatedRoute,private router: Router,
    private collectionService: CollectionService) { }

  ngOnInit() {
    this.collection = new collection();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    console.log("ngOninit");
    
    
    this.collectionService.getCollection(this.id)
      .subscribe(data => {
        console.log(data);
        this.collection = data;
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });


  }

}
