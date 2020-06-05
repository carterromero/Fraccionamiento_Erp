import { Component, OnInit } from '@angular/core';
import { GeneralService } from "../../general.service";
import { GeneralQ } from "../../generalq";
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.scss']
})
export class GeneralListComponent implements OnInit {

  general: Observable<GeneralQ[]>;

  constructor(private generalService: GeneralService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getGeneralListQ().subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getGeneralListQ();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });
  }

  deleteGeneral(id: number) {
    this.generalService.deleteGeneral(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => {console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']); 
        }
      );
  }

  generalDetails(id: number){
    this.router.navigate(['general-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-general', id]);
  }

}