import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/report';
import { ReportService } from 'src/app/report.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
