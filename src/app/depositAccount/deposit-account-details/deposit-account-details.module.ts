import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { DepositAccountDetailsRoutingModule } from '../deposit-account-details/deposit-account-details-routing.module';
import { DepositAccountDetailsComponent } from '../deposit-account-details/deposit-account-details.component';

@NgModule({
  declarations: [DepositAccountDetailsComponent],
  imports: [
    CommonModule,
    DepositAccountDetailsRoutingModule,
    SharedModule
  ]
})
export class DepositAccountDetailsModule { 



}