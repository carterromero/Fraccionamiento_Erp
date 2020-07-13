import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { TagServiceService } from '../../service/tag-service.service';
import { Reports } from '../../models/reports';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ac-tags-details',
  templateUrl: './ac-tags-details.component.html',
  styleUrls: ['./ac-tags-details.component.scss']
})
export class AcTagsDetailsComponent implements OnInit {

  constructor(private TagServiceService: TagServiceService,
    private router: Router, private route: ActivatedRoute,
    private location: Location) { }
  
  code:string;
  tag: Observable<Reports[]>;

  alertDisable = true;
  alertMessage = "null";

  ngOnInit() {
    
    this.code=this.route.firstChild.snapshot.params['id'];
    console.log(this.code);
    this.TagServiceService.getOneReport(this.code).subscribe(
      response => {
        this.tag = this.TagServiceService.getOneReport(this.code);
        console.log(response);
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      }
    );
  }

  
  returnTags() {
    this.location.back();
  }

}
