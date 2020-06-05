import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateGeneralRoutingModule } from './update-general-routing.module';
import { UpdateGeneralComponent } from './update-general.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateGeneralComponent],
  imports: [
    CommonModule,
    UpdateGeneralRoutingModule,
    SharedModule
  ]
})
export class UpdateGeneralModule { }