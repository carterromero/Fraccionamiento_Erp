import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountsRoutingModule } from './create-accounts-routing.module';
import { CreateAccountsComponent } from './create-accounts.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateAccountsComponent],
  imports: [
    CommonModule,
    CreateAccountsRoutingModule,
    SharedModule
  ]
})
export class CreateAccountsModule { }