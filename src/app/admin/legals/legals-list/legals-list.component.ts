import { Component, OnInit } from '@angular/core';
import { LegalsService } from 'src/app/services/admin/legals.service';
import { Router } from '@angular/router';
import { Legals } from 'src/app/services/admin/legals';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-legals-list',
  templateUrl: './legals-list.component.html',
  styleUrls: ['./legals-list.component.scss']
})
export class LegalsListComponent implements OnInit {

  general: Observable<Legals[]>;
  generales : Legals = new Legals();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: LegalsService,
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

  deleteGeneral(id: number) {
    this.alertDisable = true;
    this.alertDisables = true;
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages ="La empresa se a eliminado correctamente";
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

  generalDetails(id: number){
    this.router.navigate(['legals-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-legals', id]);
  }

}
