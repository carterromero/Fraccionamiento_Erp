import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondominumsListRoutingModule1 } from './condominums-list-routing.module';
import { CondominumsListComponent1 } from './condominums-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CondominumsListComponent1],
  imports: [
    CommonModule,
    CondominumsListRoutingModule1,
    SharedModule
  ]
})
export class CondominumsListModule1 { }
