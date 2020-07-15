import { Component, OnInit } from '@angular/core';
import { TagServiceService } from '../../service/tag-service.service';
import { TagClass } from '../../models/tag-class';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ac-create-tags',
  templateUrl: './ac-create-tags.component.html',
  styleUrls: ['./ac-create-tags.component.scss']
})
export class AcCreateTagsComponent implements OnInit {

  tags: TagClass = new TagClass();
  submitted = false;

  constructor(private TagServiceService: TagServiceService ,
    private router: Router,private location: Location) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted = false;
    this.tags = new TagClass();
  }

  save() {
    this.TagServiceService.createtags(this.tags)
      .subscribe(data => console.log(data), error => console.log(error));
    this.tags = new TagClass();
    this.gotoList();
  }

  onSubmit(form: NgForm) {  
    if(form.valid){
      this.submitted = true;
      this.save(); 
    }else{
      console.log('Form no valid')
    }
  }

  
  gotoList() {
    // this.router.navigate(['/ac-tags-list']);
    this.location.back();
  }

}
