import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciliacionListRoutingModule } from './conciliacion-list-routing.module';
import { ConciliacionListComponent } from './conciliacion-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ConciliacionListComponent],
  imports: [
    CommonModule,
    ConciliacionListRoutingModule,
    SharedModule
  ]
})
export class ConciliacionListModule { }