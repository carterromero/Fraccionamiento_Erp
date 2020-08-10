import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReportListRoutingModule } from './report-list-routing.module';
import { ReportListComponent } from './report-list.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ReportListComponent],
  imports: [
    CommonModule,
    ReportListRoutingModule,
    SharedModule
  ]
})
export class ReportListModule { }