import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodsListRoutingModule } from './periods-list-routing.module';
import { PeriodsListComponent } from './periods-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [PeriodsListComponent],
  imports: [
    CommonModule,
    PeriodsListRoutingModule,
    SharedModule
  ]
})
export class PeriodsListModule { }