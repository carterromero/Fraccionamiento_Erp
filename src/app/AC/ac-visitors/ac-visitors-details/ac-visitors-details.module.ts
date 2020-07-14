import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcVisitorsDetailsRoutingModule } from './ac-visitors-details-routing.module';
import { AcVisitorsDetailsComponent } from './ac-visitors-details.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [AcVisitorsDetailsComponent],
  imports: [
    CommonModule,
    AcVisitorsDetailsRoutingModule,
    SharedModule
  ]
})
export class AcVisitorsDetailsModule { }
