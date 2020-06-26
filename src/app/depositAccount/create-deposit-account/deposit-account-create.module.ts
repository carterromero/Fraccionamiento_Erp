import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DepositAccountCreateRoutingModule } from './deposit-account-create-routing.module';
import { CreateDepositAccountComponent } from './create-deposit-account.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateDepositAccountComponent],
  imports: [
    CommonModule,
    DepositAccountCreateRoutingModule,
    SharedModule
  ]
})
export class DepositAccountCreateModule { 



}