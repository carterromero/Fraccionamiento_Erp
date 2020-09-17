import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camaras } from 'src/app/services/admin/cameras';
import { CamarasService } from 'src/app/services/admin/cameras.service';
import { Observable } from 'rxjs';
import { EmbedVideoService } from 'ngx-embed-video';


@Component({
  selector: 'app-camara-list',
  templateUrl: './camara-list.component.html',
  styleUrls: ['./camara-list.component.scss']
})
export class CamaraListComponent implements OnInit {
  id: number;
  cam = Camaras;
  general: Observable<Camaras[]>;
  generales: Camaras = new Camaras();
  alertDisable = true;
  alertDisables = true;
  alertMessage = 'null';
  alertMessages = 'null';

  vimeoUrl = 'http://dtiservice.redirectme.net:90/videostream.cgi?user=admin&pwd=888888';

  constructor(private generalService: CamarasService,
              private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit(): void {

    this.reloadData();
  }

  reloadData() {
    // tslint:disable-next-line: no-string-literal
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);

    this.generalService.getCamaraList(this.id).subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getCamaraList(this.id);
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];
        }
      });
      this
  }


}
