import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalslinDetailsRoutingModule } from './journalslin-details-routing.module';
import { JournalslinDetailsComponent } from './journalslin-details.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [JournalslinDetailsComponent],
  imports: [
    CommonModule,
    JournalslinDetailsRoutingModule,
    SharedModule
  ]
})
export class JournalslinDetailsModule { }