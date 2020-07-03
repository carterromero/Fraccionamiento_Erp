import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportEmployeeListRoutingModule } from './report-employee-list-routing.module';
import { ReportEmployeeListComponent } from './repor-employee-list.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ReportEmployeeListComponent],
  imports: [
    CommonModule,
    ReportEmployeeListRoutingModule,
    SharedModule
  ]
})
export class ReportEmployeeListModule { }