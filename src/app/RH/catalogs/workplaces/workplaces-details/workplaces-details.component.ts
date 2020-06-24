import { Component, OnInit } from '@angular/core';
import { Workplaces } from 'src/app/workplaces';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkplacesService } from 'src/app/workplaces.service';

@Component({
  selector: 'app-workplaces-details',
  templateUrl: './workplaces-details.component.html',
  styleUrls: ['./workplaces-details.component.scss']
})
export class WorkplacesDetailsComponent implements OnInit {
  id: number;
  workplace: Workplaces;
  alertDisable = true;
  alertMessage = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private workplaceService: WorkplacesService) { }

 ngOnInit() {
    this.workplace = new Workplaces();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.workplaceService.getWorkplace(this.id)
      .subscribe(data => {
        console.log(data);
        this.workplace = data;
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }
}
