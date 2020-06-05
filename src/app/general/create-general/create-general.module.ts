import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateGeneralRoutingModule } from './create-general-routing.module';
import { CreateGeneralComponent } from './create-general.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateGeneralComponent],
  imports: [
    CommonModule,
    CreateGeneralRoutingModule,
    SharedModule
  ]
})
export class CreateGeneralModule { }