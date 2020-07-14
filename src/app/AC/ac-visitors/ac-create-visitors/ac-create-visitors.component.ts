import { Component, OnInit } from '@angular/core';
import { InsertVisitors } from '../../models/insert_visitors';
import { Observable } from 'rxjs';
import { Tenants } from '../../models/tenants';
import { VisitType } from '../../models/visit_type';
import { Tags } from '../../models/tags';
import { Router } from '@angular/router';
import { VisitorsService } from '../../service/visitors.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ac-create-visitors',
  templateUrl: './ac-create-visitors.component.html',
  styleUrls: ['./ac-create-visitors.component.scss']
})
export class AcCreateVisitorsComponent implements OnInit {

  insertVisitors: InsertVisitors = new InsertVisitors();
  submitted = false;
  tenants: Observable<Tenants[]>;
  visitorType: Observable<VisitType[]>;
  tags: Observable<Tags[]>;
  
  constructor(private router: Router, 
    private visitorsService: VisitorsService) { }

  ngOnInit() {
    this.getTenants();
    this.getVisitType();
    this.getTags();
  }

  save(){
    this.visitorsService.createVisitor(this.insertVisitors)
    .subscribe(data => console.log(data), error => console.log(error));
    this.insertVisitors = new InsertVisitors();
    this.backToVisitors();
  }

  onSubmit(form: NgForm){
    if(form.valid){
      this.submitted = true;
      this.save();
      this.backToVisitors();
    }else{
      console.log('Form no valid')
    }
    
  }

  getTenants()
  {
    this.visitorsService.getTenants().subscribe(
      response => {
        this.tenants = this.visitorsService.getTenants();
          console.log(response);
      },
      error => {
         console.log(error);
      }
    );  
  }

  getVisitType()
  {
    this.visitorsService.get_visit_type().subscribe(
      response => {
        this.visitorType = this.visitorsService.get_visit_type();
          console.log(response);
      },
      error => {
         console.log(error);
      }
    );  
  }

  getTags()
  {
    this.visitorsService.getTagsV(0).subscribe(
      response => {
        this.tags = this.visitorsService.getTagsV(0);
          console.log(response);
      },
      error => {
         console.log(error);
      }
    );  
  }

  backToVisitors(){
    this.router.navigate(['ac-visitors-list']);
  }
}
