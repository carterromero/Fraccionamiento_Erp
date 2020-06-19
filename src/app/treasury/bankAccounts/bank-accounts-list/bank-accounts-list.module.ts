import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccountsListRoutingModule } from './bank-accounts-list-routing.module';
import { BankAccountsListComponent } from './bank-accounts-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [BankAccountsListComponent],
  imports: [
    CommonModule,
    BankAccountsListRoutingModule,
    SharedModule
  ]
})
export class BankAccountsListModule { 



}