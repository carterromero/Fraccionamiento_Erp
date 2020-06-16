import { Component, OnInit } from '@angular/core';
import { CreditorService } from 'src/app/creditor.service';
import { Router } from '@angular/router';
import { Creditor } from 'src/app/creditor';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-creditor-list',
  templateUrl: './creditor-list.component.html',
  styleUrls: ['./creditor-list.component.scss']
})
export class CreditorListComponent implements OnInit {

  general: Observable<Creditor[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: CreditorService,
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
    this.router.navigate(['creditor-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-creditor', id]);
  }

}

