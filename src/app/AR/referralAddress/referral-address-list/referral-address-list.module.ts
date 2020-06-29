import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralAddressListRoutungModule } from './referral-address-list-routing.module';
import { ReferralAddressListComponent } from './referral-address-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ReferralAddressListComponent],
  imports: [
    CommonModule,
    ReferralAddressListRoutungModule,
    SharedModule
  ]
})
export class ReferralAddressListModule { }