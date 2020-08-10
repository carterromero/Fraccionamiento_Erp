import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciliacionARListRoutingModule } from './conciliacion-ar-list-routing.module';
import { ConciliacionARListComponent } from './conciliacion-ar-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ConciliacionARListComponent],
  imports: [
    CommonModule,
    ConciliacionARListRoutingModule,
    SharedModule
  ]
})
export class ConciliacionListModule { }