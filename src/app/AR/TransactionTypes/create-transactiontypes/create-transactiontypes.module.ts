import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTransactionTypesRoutingModule } from './create-transactiontypes-routing.module';
import { CreateTransactionTypesComponent } from './create-transactiontypes.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateTransactionTypesComponent],
  imports: [
    CommonModule,
    CreateTransactionTypesRoutingModule,
    SharedModule
  ]
})
export class CreateTransactionTypesModule { }