import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcCreateVisitorsRoutingModule } from './ac-create-visitors-routing.module';
import { AcCreateVisitorsComponent } from './ac-create-visitors.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ AcCreateVisitorsComponent],
  imports: [
    CommonModule,
    AcCreateVisitorsRoutingModule,
    SharedModule
  ]
})
export class AcCreateVisitorsModule { }
