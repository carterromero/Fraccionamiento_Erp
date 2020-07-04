import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsListRoutingModule } from './accounts-list-routing.module';
import { AccountsListComponent } from './accounts-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [AccountsListComponent],
  imports: [
    CommonModule,
    AccountsListRoutingModule,
    SharedModule
  ]
})
export class AccountsListModule { }