import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcUpdateVisitorsRoutingModule } from './ac-update-visitors-routing.module';
import { AcUpdateVisitorsComponent } from './ac-update-visitors.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ AcUpdateVisitorsComponent],
  imports: [
    CommonModule,
    AcUpdateVisitorsRoutingModule,
    SharedModule
  ]
})
export class AcUpdateVisitorsModule { }
