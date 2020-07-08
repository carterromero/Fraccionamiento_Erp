import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AccolintypeService } from "../../../../services/gl/accolintype.service";
import { Accolintype } from "../../../../services/gl/accolintype";
import { Router } from '@angular/router';

@Component({
  selector: 'app-accolintype-list',
  templateUrl: './accolintype-list.component.html',
  styleUrls: ['./accolintype-list.component.scss']
})
export class AccolintypeListComponent implements OnInit {

 
  general: Observable<Accolintype[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: AccolintypeService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployeeList().subscribe(
      data => {
        this.general = this.generalService.getEmployeeList();
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

  deleteGeneral(p_id: number) {
    this.alertDisable = true;
    this.alertDisables = true;
    this.generalService.deleteEmployee(p_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages =" se a eliminado correctamente";
        },
        error => {
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }  
        }
      );
  }

  generalDetails(p_id: number){
    this.router.navigate(['accolintype-details', p_id]);
  }

  updateGeneral(p_id: number){
    this.router.navigate(['update-accolintype', p_id]);
  }

}


