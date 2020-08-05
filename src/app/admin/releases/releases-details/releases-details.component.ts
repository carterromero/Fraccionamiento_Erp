import { Component, OnInit } from '@angular/core';
import { Releases } from 'src/app/releases';
import { ReleasesService } from 'src/app/releases.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
  
  constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient,
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

  enviarAviso(){

    
    var body ={
      "notification":{
      "title": "AVISO",
      "body":this.release.releases_subject,
      "click_action":"FCM_PLUGIN_ACTIVITY",
      "sound":"default"
      },
      "data":{
      "param":{
      "metodo":2
      }
      },
      "to":"/topics/all"
      };
      const headers = new HttpHeaders({ Authorization: 'key=AAAAzgdTJtc:APA91bECXFF5RzpyTiY49RP9y1BSer70--X45VDvA4ff5RLBKEBOzI6wOxBcSVATEdKE7jtEJ73kXpoKBvZVDXqx1AVLT7FPX-x3hWNkW45C91gYYlNIuVGa8mdVd1J8f7MJ4hpA9kCS' });
      this.http.post("https://fcm.googleapis.com/fcm/send", body, {headers})
      .subscribe((result)=>{
      console.log("Result: ",result);
      },(error)=>{
      console.log("Error: ",error);
      });


  }

  gotoList() 
  {
    this.router.navigate(['releases-list']);
  }


}
