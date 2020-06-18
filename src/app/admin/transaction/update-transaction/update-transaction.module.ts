import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { UpdateTransactionComponent } from './update-transaction.component';
import { UpdateTransactionRoutingModule } from './update-transaction-routing.module';



@NgModule({
  declarations: [ UpdateTransactionComponent ],
  imports: [
    CommonModule,
    UpdateTransactionRoutingModule ,
    SharedModule
  ]
})
export class  TransactionListModule { }