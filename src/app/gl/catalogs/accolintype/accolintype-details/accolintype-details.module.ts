import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccolintypeDetailsRoutingModule } from './accolintype-details-routing.module';
import { AccolintypeDetailsComponent } from './accolintype-details.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [AccolintypeDetailsComponent],
  imports: [
    CommonModule,
    AccolintypeDetailsRoutingModule,
    SharedModule
  ]
})
export class AccolintypeDetailsModule { }