import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateLinesRoutingModule } from './update-lines-routing.module';
import { UpdateLinesComponent } from './update-lines.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateLinesComponent],
  imports: [
    CommonModule,
    UpdateLinesRoutingModule,
    SharedModule
  ]
})
export class UpdateLinesModule { }