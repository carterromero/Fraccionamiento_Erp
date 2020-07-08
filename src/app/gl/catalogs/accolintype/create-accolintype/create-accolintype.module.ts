import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccolintypeRoutingModule } from './create-accolintype-routing.module';
import { CreateAccolintypeComponent } from './create-accolintype.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateAccolintypeComponent],
  imports: [
    CommonModule,
    CreateAccolintypeRoutingModule,
    SharedModule
  ]
})
export class CreateAccolintypeModule { }