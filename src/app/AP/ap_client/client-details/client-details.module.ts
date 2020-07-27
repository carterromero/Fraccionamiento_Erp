import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDetailsRoutingModule } from './client-details-routing.module';
import { ClientDetailsComponent } from './client-details.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ClientDetailsComponent],
  imports: [
    CommonModule,
    ClientDetailsRoutingModule,
    SharedModule
  ]
})
export class ClientDetailsModule { }