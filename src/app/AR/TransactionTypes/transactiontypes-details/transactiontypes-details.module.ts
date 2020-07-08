import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionTypesDetailsRoutingModule } from './transactiontypes-details-routing.module';
import { TransactionTypesDetailsComponent } from './transactiontypes-details.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [TransactionTypesDetailsComponent],
  imports: [
    CommonModule,
    TransactionTypesDetailsRoutingModule,
    SharedModule
  ]
})
export class TransactionTypesDetailsModule { }