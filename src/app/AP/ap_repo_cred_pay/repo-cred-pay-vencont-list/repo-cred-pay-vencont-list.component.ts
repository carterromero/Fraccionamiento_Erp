import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RepoCredPay } from 'src/app/repo-cred-pay';
import { RepoCredPayService } from 'src/app/repo-cred-pay.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repo-cred-pay-vencont-list',
  templateUrl: './repo-cred-pay-vencont-list.component.html',
  styleUrls: ['./repo-cred-pay-vencont-list.component.scss']
})
export class RepoCredPayVencontListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
