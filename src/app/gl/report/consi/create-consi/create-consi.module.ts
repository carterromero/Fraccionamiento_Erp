import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateConsiRoutingModule } from './create-consi-routing.module';
import { CreateConsiComponent } from './create-consi.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateConsiComponent],
  imports: [
    CommonModule,
    CreateConsiRoutingModule,
    SharedModule
  ]
})
export class CreateConsiModule { }