import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciliacionpListRoutingModule } from './conciliacionp-list-routing.module';
import { ConciliacionpListComponent } from './conciliacionp-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ConciliacionpListComponent],
  imports: [
    CommonModule,
    ConciliacionpListRoutingModule,
    SharedModule
  ]
})
export class ConciliacionpListModule { }