import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateAccolintypeRoutingModule } from './update-accolintype-routing.module';
import { UpdateAccolintypeComponent } from './update-accolintype.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateAccolintypeComponent],
  imports: [
    CommonModule,
    UpdateAccolintypeRoutingModule,
    SharedModule
  ]
})
export class UpdateAccolintypeModule { }