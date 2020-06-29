import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepoCredPay } from 'src/app/repo-cred-pay';
import { RepoCredPayService } from 'src/app/repo-cred-pay.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-repo-cred-pay-cont-list',
  templateUrl: './repo-cred-pay-cont-list.component.html',
  styleUrls: ['./repo-cred-pay-cont-list.component.scss']
})
export class RepoCredPayContListComponent implements OnInit {
  general: Observable<RepoCredPay[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  employee: RepoCredPay;  

  constructor(private generalService: RepoCredPayService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData('date');
  }
  
  reloadData(date) {
    
    this.generalService.getEmployee(date).subscribe(
      data => {
        console.log(date);
        this.general = this.generalService.getEmployee(date);
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

}