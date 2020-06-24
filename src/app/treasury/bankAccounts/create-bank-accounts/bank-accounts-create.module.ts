import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BankAccountsCreateRoutingModule } from './bank-accounts-create-routing.module';
import { CreateBankAccountsComponent } from './create-bank-accounts.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateBankAccountsComponent],
  imports: [
    CommonModule,
    BankAccountsCreateRoutingModule,
    SharedModule
  ]
})
export class BankAccountsCreateModule { 



}