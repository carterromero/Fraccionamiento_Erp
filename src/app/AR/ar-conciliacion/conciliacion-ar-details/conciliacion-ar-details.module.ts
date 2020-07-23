import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciliacionDetailsRoutingModule } from './conciliacion-ar-details-routing.module';
import { ConciliacionARDetailsComponent } from './conciliacion-ar-details.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ConciliacionARDetailsComponent],
  imports: [
    CommonModule,
    ConciliacionDetailsRoutingModule,
    SharedModule
  ]
})
export class ConciliacionDetailsModule { }