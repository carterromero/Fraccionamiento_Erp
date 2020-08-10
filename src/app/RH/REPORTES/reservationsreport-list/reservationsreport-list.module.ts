import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsreportListComponent } from './reservationsreport-list.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';
import { ReservationsreportListRoutingModule } from './reservationsreport-list-routing.module';

@NgModule({
  declarations: [ReservationsreportListComponent],
  imports: [
    CommonModule,
    ReservationsreportListRoutingModule,
    SharedModule
  ]
})
export class ReservationsReportListModule { }