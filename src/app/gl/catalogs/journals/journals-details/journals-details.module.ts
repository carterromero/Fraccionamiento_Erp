import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalsDetailsRoutingModule } from './journals-details-routing.module';
import { JournalsDetailsComponent } from './journals-details.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [JournalsDetailsComponent],
  imports: [
    CommonModule,
    JournalsDetailsRoutingModule,
    SharedModule
  ]
})
export class JournalsDetailsModule { }