import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondominumsListRoutingModule } from './condominums-list-routing.module';
import { CondominumsListComponent } from './condominums-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CondominumsListComponent],
  imports: [
    CommonModule,
    CondominumsListRoutingModule,
    SharedModule
  ]
})
export class CondominumsListModule { }