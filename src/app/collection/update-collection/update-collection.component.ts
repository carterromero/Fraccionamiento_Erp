import { Component, OnInit } from '@angular/core';
import { collection } from 'src/app/collection';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/collection.service';


@Component({
  selector: 'app-update-collection',
  templateUrl: './update-collection.component.html',
  styleUrls: ['./update-collection.component.scss']
})
export class UpdatecollectionComponent implements OnInit {

  id: number;
  collection: collection;

  constructor(private route: ActivatedRoute, private router: Router,
    private collectionService: CollectionService) { }

  ngOnInit() {

    this.collection = new collection();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.collection.collection_status);
    this.collectionService.getCollection(this.id)
      .subscribe(data => {
        console.log(data);
        this.collection = data;
        this.collection.collection_status = (String(this.collection.collection_status) == "false") ? null : "false";
        console.log(this.collection.collection_status);
      }, error => {
        console.log(error);
      });
  }



  updatecollection() {

    this.collection.collection_id = 3;
    console.log(this.collection.collection_status);

    this.collectionService.updateCollection(this.id, this.collection)
      .subscribe(data => {
        console.log(data);
        this.gotoList();
      },
        error => {
          console.log(error);

        });


  }

  onSubmit() {
    this.updatecollection();
  }

  gotoList() {
    this.router.navigate(['collection-list']);
  }

}
