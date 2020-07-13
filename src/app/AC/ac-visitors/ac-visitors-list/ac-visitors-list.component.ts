import { Component, OnInit } from '@angular/core';
import { VisitorsService } from '../../service/visitors.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Visitors } from '../../models/visitors';

@Component({
  selector: 'app-ac-visitors-list',
  templateUrl: './ac-visitors-list.component.html',
  styleUrls: ['./ac-visitors-list.component.scss']
})
export class AcVisitorsListComponent implements OnInit {

  constructor( private visitorsService: VisitorsService, private router: Router ) { }

  visitors: Observable<Visitors[]>;
  tabVisitor: number = 1;
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.visitorsService.get_visitorsList().subscribe(
      data => {
        this.visitors = this.visitorsService.get_visitorsList();
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  createVisitors(){
    this.router.navigate(['create-visitors']);
  }

  visitorDetail(id: number){
    this.router.navigate(['ac-visitors-details',id]);
  }

  updateVisitor(id: number){
    this.router.navigate(['ac-update-visitors',id]);
  }
}
