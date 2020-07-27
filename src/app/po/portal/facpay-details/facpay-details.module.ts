import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {SharedModule} from '../../../theme/shared/shared.module';
import { FacpayDetailsComponent } from './facpay-details.component';
import { FacpayDetailsRoutingModule } from './facpay-details-routing.module';

@NgModule({
  declarations: [FacpayDetailsComponent],
  imports: [
    CommonModule,
    FacpayDetailsRoutingModule,
    SharedModule
  ]
})
export class FacpayDetailsModule{ }