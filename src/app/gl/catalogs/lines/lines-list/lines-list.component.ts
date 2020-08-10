import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { LinesService } from "../../../../services/gl/lines.service";
import { Lines } from "../../../../services/gl/lines";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lines-list',
  templateUrl: './lines-list.component.html',
  styleUrls: ['./lines-list.component.scss']
})
export class LinesListComponent implements OnInit {


  general: Observable<Lines[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: LinesService,
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
          this.alertMessages ="se a eliminado correctamente";
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
    this.router.navigate(['lines-details', p_id]);
  }

  updateGeneral(p_id: number){
    this.router.navigate(['update-lines', p_id]);
  }

}


