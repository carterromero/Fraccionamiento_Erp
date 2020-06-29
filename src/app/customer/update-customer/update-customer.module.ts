import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateCustomerRoutingModule } from './update-customer-routing.module';
import { UpdateCustomerComponent } from './update-customer.component';
import { SharedModule } from '../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateCustomerComponent],
  imports: [
    CommonModule,
    UpdateCustomerRoutingModule,
    SharedModule
  ]
})

export class UpdateCustomerModule { }