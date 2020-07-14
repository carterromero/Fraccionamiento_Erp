import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TagClass } from '../../models/tag-class';
import { Router } from '@angular/router';
import { TagServiceService } from '../../service/tag-service.service';

@Component({
  selector: 'app-ac-tags-list',
  templateUrl: './ac-tags-list.component.html',
  styleUrls: ['./ac-tags-list.component.scss']
})
export class AcTagsListComponent implements OnInit {

  tags: Observable<TagClass[]>;
  InactTags: Observable<TagClass[]>;
    
  tabTActive:number = 1;
  tabTInactive:number = 1;
  tag: TagClass;

  constructor(private TagServiceService: TagServiceService ,
    private router: Router
    ) { }
    

    
  ngOnInit() {
    this.getTags();
    // this.getInactiveTags();
    
  }

  
  


  list(){
    this.router.navigate(['tags']);
  }

  getTags()
  {
    this.TagServiceService.getTags().subscribe(
      response => {
        this.tags = this.TagServiceService.getTags();
          console.log(response);
      },
      error => {
         console.log(error);
      }
  );  
  }

  getInactiveTags()
  {
    this.TagServiceService.getInactiveTags().subscribe(
      response => {
        this.InactTags = this.TagServiceService.getInactiveTags();
          console.log(response);
      },
      error => {
         console.log(error);
      }
  );  
  }

  inactiveTag(code: string){

    this.TagServiceService.inactivar(code).subscribe(
      data => console.log(data), 
      error => console.log(error)
    );
    this.tag = new TagClass();
    this.ngOnInit();
  }

  tagsDetails( code:string){
    this.router.navigate(['ac-tags-details',code]);
  }

  createTag(){
    this.router.navigate(['tags-create']);
  }


}
