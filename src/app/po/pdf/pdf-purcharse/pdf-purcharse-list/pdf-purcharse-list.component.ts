import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Purcharse } from 'src/app/purcharse';
import { PurcharseService } from 'src/app/purcharse.service';

@Component({
  selector: 'app-pdf-purcharse-list',
  templateUrl:'./pdf-purcharse-list.component.html',
  styleUrls: ['./pdf-purcharse-list.component.scss']
})
export class PdfPurcharseListComponent implements OnInit {

  general: Observable<Purcharse[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: PurcharseService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  


  
  reloadData() {
    
    this.generalService.getEmployeeList(1).subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeeList(1);
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
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages ="El fraccionamiento se a eliminado correctamente";
        },
        error => {console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
        }
      );
  }

  generalDetails(id: number){
    this.router.navigate(['purcharse-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-purcharse', id]);
  }




}
