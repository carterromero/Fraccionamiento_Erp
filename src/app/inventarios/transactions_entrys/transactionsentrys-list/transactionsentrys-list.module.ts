import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsEntrysListRoutingModule } from './transactionsentrys-list-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TransactionsentrysListComponent } from './transactionsentrys-list.component';

@NgModule({
  declarations: [TransactionsentrysListComponent],
  imports: [
    CommonModule,
    TransactionsEntrysListRoutingModule,
    SharedModule
  ]
})
export class TransactionsEntrysListModule { }