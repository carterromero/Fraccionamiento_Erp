import { Component, OnInit } from '@angular/core';
import { collection } from 'src/app/collection';
import { CollectionService } from 'src/app/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss']
})

export class CreatecollectionComponent implements OnInit {

  collection: collection = new collection();
  submitted = false;

  constructor(private collectionService: CollectionService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newcollection(): void {
    this.submitted = false;
    this.collection = new collection();
  }

  save() {

    this.collection.collection_id = 7;


    this.collectionService.createCollection(this.collection)
      .subscribe(data => {
        console.log(data);
        this.gotoList();
      },
        error => {
          console.log(error);
        });

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['collection-list']);
  }

}