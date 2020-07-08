import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionTypesListRoutingModule } from './transactiontypes-list-routing.module';
import { TransactionTypesListComponent } from './transactiontypes-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [TransactionTypesListComponent],
  imports: [
    CommonModule,
    TransactionTypesListRoutingModule,
    SharedModule
  ]
})
export class TransactionTypesListModule { }