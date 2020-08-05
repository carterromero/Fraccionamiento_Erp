import { Component, OnInit } from '@angular/core';
import { Releases } from 'src/app/releases';
import { ReleasesService } from 'src/app/releases.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-releases-details',
  templateUrl: './releases-details.component.html',
  styleUrls: ['./releases-details.component.scss']
})
export class ReleasesDetailsComponent implements OnInit {
  id: number;
  release: Releases;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router, 
  private releaseService: ReleasesService) { }

 ngOnInit() {
    this.release = new Releases();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.releaseService.getRelease(this.id)
      .subscribe(data => {
        console.log(data);
        this.release = data;
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
