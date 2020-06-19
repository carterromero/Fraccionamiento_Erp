import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';


import { UpdateBankAccountsComponent } from './update-bank-accounts.component';
import { BankAccountsUpdateRoutingModule } from './bank-accounts-update-routing.module';

@NgModule({
  declarations: [UpdateBankAccountsComponent],
  imports: [
    CommonModule,
    BankAccountsUpdateRoutingModule,
  

    SharedModule
  ]
})
export class BankAccountsUpdateModule { 



}