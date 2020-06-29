import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepoCredPay } from 'src/app/repo-cred-pay';
import { RepoCredPayService } from 'src/app/repo-cred-pay.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repo-cred-pay-vencont-list',
  templateUrl: './repo-cred-pay-vencont-list.component.html',
  styleUrls: ['./repo-cred-pay-vencont-list.component.scss']
})
export class RepoCredPayVencontListComponent implements OnInit {

  general: Observable<RepoCredPay[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  date: string;
  employee: RepoCredPay;  

  constructor(private generalService: RepoCredPayService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData('date');
  }
  
  reloadData(date) {
    
    this.generalService.getEmployee(date).subscribe(
      data => {
        console.log(data);
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