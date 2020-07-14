import { Component, OnInit } from '@angular/core';
import { InsertVisitors } from '../../models/insert_visitors';
import { Router, ActivatedRoute } from '@angular/router';
import { VisitorsService } from '../../service/visitors.service';
import { Observable } from 'rxjs';
import { Tenants } from '../../models/tenants';
import { VisitType } from '../../models/visit_type';
import { Tags } from '../../models/tags';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ac-update-visitors',
  templateUrl: './ac-update-visitors.component.html',
  styleUrls: ['./ac-update-visitors.component.scss']
})
export class AcUpdateVisitorsComponent implements OnInit {

  id: number;
  visitor: InsertVisitors;
  
  constructor(private router: Router, private visitorsService: VisitorsService,
    private route: ActivatedRoute) { }

  tenants: Observable<Tenants[]>;
  visitorType: Observable<VisitType[]>;
  tags: Observable<Tags[]>;
  alertDisable = true;
  alertMessage = "null";

  ngOnInit(): void {
    this.visitor = new InsertVisitors();
    this.id = this.route.firstChild.snapshot.params['id'];

    this.visitorsService.get_oneVisitor(this.id)
      .subscribe(data => {
        console.log(data)
        this.visitor = data;
      }, error => {console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });

    this.getTenants();
    this.getVisitType();
    this.getTags();
  }

  updateVisitors() {
    this.visitorsService.updateVisitor(this.id, this.visitor)
    .subscribe(data => console.log(data), error => console.log(error));
    this.visitor = new InsertVisitors();
    this.returnVisitors();
  }
  
  onSubmit(form: NgForm){
    if(form.valid){
    this.updateVisitors();
    }else{
      console.log('Form no valid')
    }
  }

  returnVisitors(){
    this.router.navigate(['ac-visitors-list']);
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
    this.visitorsService.getTagsV(this.id).subscribe(
      response => {
        this.tags = this.visitorsService.getTagsV(this.id);
          console.log(response);
      },
      error => {
         console.log(error);
      }
    );  
  }

}
