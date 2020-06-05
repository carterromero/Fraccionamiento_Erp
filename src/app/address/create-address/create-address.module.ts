import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAddressRoutingModule } from './create-address-routing.module';
import { CreateAddressComponent } from './create-address.component';
import { SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateAddressComponent],
  imports: [
    CommonModule,
    CreateAddressRoutingModule,
    SharedModule
  ]
})
export class CreateAddressModule { }