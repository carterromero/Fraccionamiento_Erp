import { Component, OnInit } from '@angular/core';
import { Releases } from 'src/app/releases'
import { Observable } from 'rxjs';
import { ReleasesService } from 'src/app/releases.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-releases-list',
  templateUrl: './releases-list.component.html',
  styleUrls: ['./releases-list.component.scss']
})
export class ReleasesListComponent implements OnInit {

  releases: Observable<Releases[]>;
  release: Releases = new Releases();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
 condo : number;
  constructor(private releasesService: ReleasesService, private _sanitizer: DomSanitizer,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
      this.goimg();
  }

  goimg(){
    var objbuilder = '';
    objbuilder += ('<embed width=\'100%\' height=\'100%\'  src="data:application/img;base64,');
    objbuilder += (this.release.releases_attached);
    objbuilder += ('" type="application/img" />');
  }
  
  reloadData() {
    this.condo= Number(localStorage.getItem('condominums'));
    this.releasesService.getReleaseList(this.condo).subscribe(
      data => {
        console.log(data);
        this.releases = this.releasesService.getReleaseList(this.condo);
      },
      error => {
        console.log(error);   
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });

      
  }

  deleteRelease(id: number) {
    this.releasesService.deleteRelease(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages ="El aviso se a eliminado correctamente";
        },
        error => {console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
        }
      );
  }

  releaseDetails(id: number){
    this.router.navigate(['releases-detail', id]);
  }

  updateRelease(id: number){
    this.router.navigate(['update-releases', id]);
  }


}

