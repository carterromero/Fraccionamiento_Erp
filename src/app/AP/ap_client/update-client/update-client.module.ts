import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateClientRoutingModule } from './update-client-routing.module';
import { UpdateClientComponent } from './update-client.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateClientComponent],
  imports: [
    CommonModule,
    UpdateClientRoutingModule,
    SharedModule
  ]
})
export class UpdateClientModule { }