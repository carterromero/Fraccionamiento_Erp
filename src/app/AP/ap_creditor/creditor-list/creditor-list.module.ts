import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditorListRoutingModule } from './creditor-list-routing.module';
import { CreditorListComponent } from './creditor-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreditorListComponent],
  imports: [
    CommonModule,
    CreditorListRoutingModule,
    SharedModule
  ]
})
export class CreditorListModule { }