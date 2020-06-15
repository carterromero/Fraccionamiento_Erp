import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';


import { UpdateBankCodesComponent } from './update-bank-codes.component';
import { BankCodesUpdateRoutingModule } from './bank-codes-update-routing.module';

@NgModule({
  declarations: [UpdateBankCodesComponent],
  imports: [
    CommonModule,
    BankCodesUpdateRoutingModule,
  

    SharedModule
  ]
})
export class BankCodesUpdateModule { 



}