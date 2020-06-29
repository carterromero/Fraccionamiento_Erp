import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateReferralAddressRoutingModule } from './update-referral-address-routing.module';
import { UpdateReferralAddressComponent } from './update-referral-address.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateReferralAddressComponent],
  imports: [
    CommonModule,
    UpdateReferralAddressRoutingModule,
    SharedModule
  ]
})

export class UpdateReferralAddressModule { }