import { Component, OnInit } from '@angular/core';
import { Visitors } from '../../models/visitors';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitorsService } from '../../service/visitors.service';

@Component({
  selector: 'app-ac-visitors-details',
  templateUrl: './ac-visitors-details.component.html',
  styleUrls: ['./ac-visitors-details.component.scss']
})
export class AcVisitorsDetailsComponent implements OnInit {

  id: number;
  visitor: Visitors;

  alertDisable = true;
  alertMessage = "null";
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private visitorsService: VisitorsService) { }

  ngOnInit() {
    this.visitor = new Visitors();
    this.id = this.route.firstChild.snapshot.params['id'];
    console.log(this.id);

    this.visitorsService.get_oneVisitor(this.id)
    .subscribe(data => {
      console.log(data);
      this.visitor = data;
    }, error => {console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
    });
  }

  returnVisitors(){
    this.router.navigate(['ac-visitors-list']);
  }
}
