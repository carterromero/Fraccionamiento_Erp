import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BankCodesCreateRoutingModule } from './bank-codes-create-routing.module';
import { CreateBankCodesComponent } from './create-bank-codes.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateBankCodesComponent],
  imports: [
    CommonModule,
    BankCodesCreateRoutingModule,
    SharedModule
  ]
})
export class BankCodesCreateModule { 



}