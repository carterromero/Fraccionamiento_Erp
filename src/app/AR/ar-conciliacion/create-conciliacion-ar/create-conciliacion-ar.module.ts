import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCreditorRoutingModule } from './create-conciliacion-ar-routing.module';
import { CreateConciliacionARComponent } from './create-conciliacion-ar.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateConciliacionARComponent],
  imports: [
    CommonModule,
    CreateCreditorRoutingModule,
    SharedModule
  ]
})
export class CreateConciliacionARModule { }