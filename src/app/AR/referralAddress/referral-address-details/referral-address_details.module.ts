import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralAddressDetailsRoutingModule } from './referral-address_details-routing.module';
import { ReferralAddressDetailsComponent } from './referral-address-details.component';
import { SharedModule } from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ReferralAddressDetailsComponent],
  imports: [
    CommonModule,
    ReferralAddressDetailsRoutingModule,
    SharedModule
  ]
})
export class ReferralAddressDetailsModule { }