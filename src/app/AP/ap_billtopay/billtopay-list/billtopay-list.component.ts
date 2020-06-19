import { Component, OnInit } from '@angular/core';
import { Billtopay } from 'src/app/billtopay';
import { Observable } from 'rxjs';
import { Billtopayservice } from 'src/app/billtopay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billtopay-list',
  templateUrl: './billtopay-list.component.html',
  styleUrls: ['./billtopay-list.component.scss']
})
export class BilltopayListComponent implements OnInit {
  general: Observable<Billtopay[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: Billtopayservice,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployeeList().subscribe(
      data => {
        console.log(data);
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
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages =" se a eliminado correctamente";
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
    this.router.navigate(['billtopay-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-billtopay', id]);
  }


}