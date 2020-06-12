import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCondominumsRoutingModule } from './create-condominums-routing.module';
import { CreateCondominumsComponent } from './create-condominums.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateCondominumsComponent],
  imports: [
    CommonModule,
    CreateCondominumsRoutingModule,
    SharedModule
  ]
})
export class CreateCondominumsModule { }