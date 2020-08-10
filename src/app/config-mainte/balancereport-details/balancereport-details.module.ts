import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BalancereportDetailsRoutingModule } from './balancereport-details.routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import { BalancereportDetailsComponent } from './balancereport-details.component';

@NgModule({
  declarations: [BalancereportDetailsComponent],
  imports: [
    CommonModule,
    BalancereportDetailsModule,
    SharedModule
  ]
})
export class BalancereportDetailsModule { }