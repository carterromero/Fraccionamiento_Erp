import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciliacionDetailsRoutingModule } from './conciliacion-details-routing.module';
import { ConciliacionDetailsComponent } from './conciliacion-details.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ConciliacionDetailsComponent],
  imports: [
    CommonModule,
    ConciliacionDetailsRoutingModule,
    SharedModule
  ]
})
export class ConciliacionDetailsModule { }