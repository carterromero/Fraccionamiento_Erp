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

  date: string;
  employee: RepoCredPay;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: RepoCredPayService) { }

  ngOnInit() {
    this.employee = new RepoCredPay();    
    this.date = this.route.firstChild.snapshot.params['date']
    console.log(this.date);
    
    
    this.employeeService.getEmployee(this.date)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }
}