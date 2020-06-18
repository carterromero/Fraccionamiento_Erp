import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditorDetailsRoutingModule } from './creditor-details-routing.module';
import { CreditorDetailsComponent } from './creditor-details.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreditorDetailsComponent],
  imports: [
    CommonModule,
    CreditorDetailsRoutingModule,
    SharedModule
  ]
})
export class CreditorDetailsModule { }