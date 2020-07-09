import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateTransactionTypesRoutingModule } from './update-transactiontypes-routing.module';
import { UpdateTransactionTypesComponent } from './update-transactiontypes.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateTransactionTypesComponent],
  imports: [
    CommonModule,
    UpdateTransactionTypesRoutingModule,
    SharedModule
  ]
})

export class UpdateTransactionTypesModule { }