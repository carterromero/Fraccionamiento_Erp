import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateClientRoutingModule } from './create-client-routing.module';
import { CreateClientComponent } from './create-client.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateClientComponent],
  imports: [
    CommonModule,
    CreateClientRoutingModule,
    SharedModule
  ]
})
export class CreateClientModule { }