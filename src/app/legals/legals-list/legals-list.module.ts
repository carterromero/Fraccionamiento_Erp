import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalsListRoutingModule } from './legals-list-routing.module';
import { LegalsListComponent } from './legals-list.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [LegalsListComponent],
  imports: [
    CommonModule,
    LegalsListRoutingModule,
    SharedModule
  ]
})
export class LegalsListModule { }