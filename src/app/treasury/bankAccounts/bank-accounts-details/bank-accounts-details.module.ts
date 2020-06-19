import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BankAccountsDetailsRoutingModule } from '../bank-accounts-details/bank-accounts-details-routing.module';
import { BankAccountsDetailsComponent } from '../bank-accounts-details/bank-accounts-details.component';

@NgModule({
  declarations: [BankAccountsDetailsComponent],
  imports: [
    CommonModule,
    BankAccountsDetailsRoutingModule,
    SharedModule
  ]
})
export class BankAccountsDetailsModule { 



}