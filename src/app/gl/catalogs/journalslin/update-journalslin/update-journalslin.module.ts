import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateJournalslinRoutingModule } from'./update-journalslin-routing.module';
import { UpdateJournalslinComponent } from './update-journalslin.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateJournalslinComponent],
  imports: [
    CommonModule,
    UpdateJournalslinRoutingModule,
    SharedModule
  ]
})
export class UpdateJournalslinModule { }