import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinesDetailsRoutingModule } from './lines-details-routing.module';
import { LinesDetailsComponent } from './lines-details.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [LinesDetailsComponent],
  imports: [
    CommonModule,
    LinesDetailsRoutingModule,
    SharedModule
  ]
})
export class LinesDetailsModule { }