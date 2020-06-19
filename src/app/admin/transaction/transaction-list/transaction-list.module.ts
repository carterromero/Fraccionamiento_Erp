import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { TransactionListRoutingModule } from './transaction-list-routing.module';
import { TransactionListComponent } from './transaction-list.component';


@NgModule({
  declarations: [ TransactionListComponent ],
  imports: [
    CommonModule,
    TransactionListRoutingModule ,
    SharedModule
  ]
})
export class  TransactionListModule { }