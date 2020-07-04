import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsDetailsRoutingModule } from './accounts-details-routing.module';
import { AccountsDetailsComponent } from './accounts-details.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [AccountsDetailsComponent],
  imports: [
    CommonModule,
    AccountsDetailsRoutingModule,
    SharedModule
  ]
})
export class AccountsDetailsModule { }