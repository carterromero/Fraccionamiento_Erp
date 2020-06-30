import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateConciliacionRoutingModule } from './update-conciliacion-routing.module';
import { UpdateConciliacionComponent } from './update-conciliacion.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateConciliacionComponent],
  imports: [
    CommonModule,
    UpdateConciliacionRoutingModule,
    SharedModule
  ]
})
export class UpdateConciliacionModule { }