import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateJournalsRoutingModule } from './update-journals-routing.module';
import { UpdateJournalsComponent } from './update-journals.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateJournalsComponent],
  imports: [
    CommonModule,
    UpdateJournalsRoutingModule,
    SharedModule
  ]
})
export class UpdateJournalsModule { }