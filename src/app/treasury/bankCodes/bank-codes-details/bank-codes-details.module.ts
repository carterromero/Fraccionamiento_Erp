import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BankCodesDetailsRoutingModule } from '../bank-codes-details/bank-codes-details-routing.module';
import { BankCodesDetailsComponent } from '../bank-codes-details/bank-codes-details.component';

@NgModule({
  declarations: [BankCodesDetailsComponent],
  imports: [
    CommonModule,
    BankCodesDetailsRoutingModule,
    SharedModule
  ]
})
export class BankCodesDetailsModule { 



}