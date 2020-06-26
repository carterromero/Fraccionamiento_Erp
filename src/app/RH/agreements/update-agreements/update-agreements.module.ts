import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateAgreementsRoutingModule } from './update-agreements-routing.module';
import { UpdateAgreementsComponent } from './update-agreements.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateAgreementsComponent],
  imports: [
    CommonModule,
    UpdateAgreementsRoutingModule,
    SharedModule
  ]
})
export class UpdateAgreementsModule { }