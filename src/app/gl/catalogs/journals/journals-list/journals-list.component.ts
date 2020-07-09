import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { JournalsService } from "../../../../services/gl/journals.service";
import { Journals } from "../../../../services/gl/journals";
import { Router } from '@angular/router';

@Component({
  selector: 'app-journals-list',
  templateUrl: './journals-list.component.html',
  styleUrls: ['./journals-list.component.scss']
})
export class JournalsListComponent implements OnInit {

  general: Observable<Journals[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: JournalsService,
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
    this.router.navigate(['journals-details', p_id]);
  }

  updateGeneral(p_id: number){
    this.router.navigate(['update-journals', p_id]);
  }

}


