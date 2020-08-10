import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReportDetailsRoutingModule} from './report-details-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import { ReportDetailsComponent } from './report-details.component';

@NgModule({
  declarations: [ReportDetailsComponent],
  imports: [
    CommonModule,
    ReportDetailsRoutingModule,
    SharedModule
  ]
})
export class ReportDetailsModule { }