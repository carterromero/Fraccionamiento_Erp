import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AccountsService } from "../../../../services/gl/accounts.service";
import { Accounts } from "../../../../services/gl/accounts";
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {

  general: Observable<Accounts[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: AccountsService,
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
    this.router.navigate(['accounts-details', p_id]);
  }

  updateGeneral(p_id: number){
    this.router.navigate(['update-accounts', p_id]);
  }

}

