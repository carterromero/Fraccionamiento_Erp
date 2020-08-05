import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Releases } from 'src/app/releases'
import { Observable } from 'rxjs';
import { ReleasesService } from 'src/app/releases.service';

@Component({
  selector: 'app-create-releases',
  templateUrl: './create-releases.component.html',
  styleUrls: ['./create-releases.component.scss']
})
export class CreateReleasesComponent implements OnInit {

  release: Releases = new Releases();
  releases: Observable<Releases[]>;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  condo : number;
  datos:String;
  constructor(private releasesService: ReleasesService,
    private router: Router) { }


  ngOnInit() {
    this.reloadDatas();
  }

  reloadDatas() 
  { 

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
      }
    );      
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.datos = reader.result.toString();
        this.release.releases_attached = this.datos.replace("data:application/img;base64,","")
        event = this.release.releases_attached;    
    };
}
  save()
   {
    let now = new Date();
    this.release.id_condominiums = Number(localStorage.getItem('condominums'));
    this.release.created_by = Number(localStorage.getItem('id'));
    this.release.last_update_by = Number(localStorage.getItem('id'));
    this.release.releases_date = now;
    this.releasesService.createRelease(this.release)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto el aviso correctamente";
          this.release  = new Releases();
        }, 
      error => {
        console.log(error);  
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = "El aviso no se puede agregar";          
        }    
      });
  }

  onSubmit() 
      {
            this.alertDisable = true;
            this.alertDisables = true;
      /*  if(this.employee.condominums_description =="" ||  this.employee.condominums_description ==null ){
            this.alertDisable = false;
            this.alertMessage = "El Atributo Descripción es Obligatorio";          
        }
        else if(this.employee.legals_id =="" ||  this.employee.legals_id ==null ){
            this.alertDisable = false;
            this.alertMessage = "El Atributo empresa es Obligatorio";          
        }
        else{*/
           this.save();    
       // } 
  }

  gotoList() 
  {
    this.router.navigate(['releases-list']);
  }

}
