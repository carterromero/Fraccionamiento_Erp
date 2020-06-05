import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateAddressRoutingModule } from './update-address-routing.module';
import { UpdateAddressComponent } from './update-address.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateAddressComponent],
  imports: [
    CommonModule,
    UpdateAddressRoutingModule,
    SharedModule
  ]
})
export class UpdateAddressModule { }