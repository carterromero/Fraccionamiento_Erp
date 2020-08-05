import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Releases } from 'src/app/releases';
import { ReleasesService } from 'src/app/releases.service';
import * as moment from 'moment';



@Component({
  selector: 'app-update-releases',
  templateUrl: './update-releases.component.html',
  styleUrls: ['./update-releases.component.scss']
})
export class UpdateReleasesComponent implements OnInit {

  id: number;

  release: Observable<Releases[]>;
  releases: Releases = new Releases();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos:String;

  constructor(private route: ActivatedRoute, private router: Router,
  private releaseService: ReleasesService) { }

  ngOnInit() {
    
    this.id = this.route.firstChild.snapshot.params['id']
    this.releaseService.getRelease(this.id).subscribe(data => {
        console.log(data);
        this.release = data;
        this.releases.releases_status = (String(this.releases.releases_status) == "false") ? null:"false";
        console.log(this.releases.releases_status);
      }, error => {
        console.log(error);
      });
     
  }
  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.datos = reader.result.toString();
        this.releases.releases_attached = this.datos.replace("data:application/img;base64,","")
        event = this.releases.releases_attached;    
    };
}

  updateReservation() {
    this.releases.last_update_by=Number(localStorage.getItem('id'));
    this.alertDisable = true;
    this.alertDisables = true;
    moment('2020-07-24T00:00:00 z',this.releases.releases_date.toString());
    this.releases.releases_date = new Date(this.releases.releases_date);
    this.releaseService.updateRelease(this.id, this.releases)
    .subscribe(data => {console.log(data); 
          this.alertDisables = false;
          this.alertMessages ="Se actualizo";
          this.gotoList();  
      },
      error => { 
          this.alertDisable = false;
          this.alertMessage = "Erro al actualizar";     
      });
  }



  onSubmit() {
  
   
      this.updateReservation(); 
  

  }

  gotoList() {
    this.router.navigate(['releases-list']);
  }


}



