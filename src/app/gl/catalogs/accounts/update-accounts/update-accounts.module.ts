import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateAccountsRoutingModule } from './update-accounts-routing.module';
import { UpdateAccountsComponent } from './update-accounts.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateAccountsComponent],
  imports: [
    CommonModule,
    UpdateAccountsRoutingModule,
    SharedModule
  ]
})
export class UpdateAccountsModule { }