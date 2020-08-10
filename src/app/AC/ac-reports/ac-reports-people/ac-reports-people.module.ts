import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcReportsPeopleRoutingModule } from './ac-reports-people-routing.module';
import { AcReportsPeopleComponent } from './ac-reports-people.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ AcReportsPeopleComponent ],
  imports: [
    CommonModule,
    AcReportsPeopleRoutingModule,
    SharedModule
  ]
})
export class AcReportsPeopleModule { }
