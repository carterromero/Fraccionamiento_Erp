import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { JournalslinService } from "../../../../services/gl/journalslin.service";
import { Journalslin } from "../../../../services/gl/journalslin";
import { Router } from '@angular/router';

@Component({
  selector: 'app-journalslin-list',
  templateUrl: './journalslin-list.component.html',
  styleUrls: ['./journalslin-list.component.scss']
})
export class JournalslinListComponent implements OnInit {

 
  general: Observable<Journalslin[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: JournalslinService,
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
    this.router.navigate(['journalslin-details', p_id]);
  }

  updateGeneral(p_id: number){
    this.router.navigate(['update-journalslin', p_id]);
  }

}


