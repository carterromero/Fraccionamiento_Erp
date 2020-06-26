import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositAccountListRoutingModule } from './deposit-account-list-routing.module';
import { DepositAccountListComponent } from './deposit-account-list.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [DepositAccountListComponent],
  imports: [
    CommonModule,
    DepositAccountListRoutingModule,
    SharedModule
  ]
})
export class DepositAccountListModule { 



}