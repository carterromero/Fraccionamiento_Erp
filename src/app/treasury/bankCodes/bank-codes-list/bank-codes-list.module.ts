import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankCodesListRoutingModule } from './bank-codes-list-routing.module';
import { BankCodesListComponent } from './bank-codes-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [BankCodesListComponent],
  imports: [
    CommonModule,
    BankCodesListRoutingModule,
    SharedModule
  ]
})
export class BankCodesListModule { 



}