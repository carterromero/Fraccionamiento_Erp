import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateLinesRoutingModule } from './create-lines-routing.module';
import { CreateLinesComponent } from './create-lines.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateLinesComponent],
  imports: [
    CommonModule,
    CreateLinesRoutingModule,
    SharedModule
  ]
})
export class CreateLinesModule { }
