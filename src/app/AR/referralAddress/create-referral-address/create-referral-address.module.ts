import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateReferralAddressRoutingModule } from './create-referral-address-routing.module';
import { CreateReferralAddressComponent } from './create-referral-address.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateReferralAddressComponent],
  imports: [
    CommonModule,
    CreateReferralAddressRoutingModule,
    SharedModule
  ]
})
export class CreateReferralAddressModule { }