import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { TransactionDetailsComponent } from './transaction-details.component';
import { TransactionDetailsRoutingModule } from './transaction-details-routing.module';


@NgModule({
  declarations: [ TransactionDetailsComponent ],
  imports: [
    CommonModule,
    TransactionDetailsRoutingModule ,
    SharedModule
  ]
})
export class  TransactionDetailsModule { }