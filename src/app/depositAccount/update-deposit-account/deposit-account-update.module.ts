import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';


import { UpdateDepositAccountComponent } from './update-deposit-account.component';
import { DepositAccountUpdateRoutingModule } from './deposit-account-update-routing.module';

@NgModule({
  declarations: [UpdateDepositAccountComponent],
  imports: [
    CommonModule,
    DepositAccountUpdateRoutingModule,
  

    SharedModule
  ]
})
export class DepositAccountUpdateModule { 



}