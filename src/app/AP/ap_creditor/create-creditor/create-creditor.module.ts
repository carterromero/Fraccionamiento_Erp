import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCreditorRoutingModule } from './create-creditor-routing.module';
import { CreateCreditorComponent } from './create-creditor.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateCreditorComponent],
  imports: [
    CommonModule,
    CreateCreditorRoutingModule,
    SharedModule
  ]
})
export class CreateCreditorModule { }