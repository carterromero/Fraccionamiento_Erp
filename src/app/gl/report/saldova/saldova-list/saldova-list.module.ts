import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaldovaListRoutingModule } from './saldova-list-routing.module';
import { SaldovaListComponent } from './saldova-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [SaldovaListComponent],
  imports: [
    CommonModule,
    SaldovaListRoutingModule,
    SharedModule
  ]
})
export class SaldovaListModule { }