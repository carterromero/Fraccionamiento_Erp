import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressListRoutingModule } from './address-list-routing.module';
import { AddressListComponent } from './address-list.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [AddressListComponent],
  imports: [
    CommonModule,
    AddressListRoutingModule,
    SharedModule
  ]
})
export class AddressListModule { }