import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TagClass } from '../../models/tag-class';
import { TagServiceService } from '../../service/tag-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ac-inactive-tags-list',
  templateUrl: './ac-inactive-tags-list.component.html',
  styleUrls: ['./ac-inactive-tags-list.component.scss']
})
export class AcInactiveTagsListComponent implements OnInit {

  tags: Observable<TagClass[]>;
  InactTags: Observable<TagClass[]>;
  id: number;
  tag: TagClass;
    
  tabTActive:number = 1;
  tabTInactive:number = 1;

  constructor(private TagServiceService: TagServiceService ,
    private router: Router, private route: ActivatedRoute
    ) { }
    

    
  ngOnInit() {
    //this.getTags();
    this.getInactiveTags();
    
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

  activeTag(code: string){

    this.TagServiceService.activar(code).subscribe(
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
