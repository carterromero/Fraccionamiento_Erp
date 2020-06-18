import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateCreditorRoutingModule } from './update-creditor-routing.module';
import { UpdateCreditorComponent } from './update-creditor.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateCreditorComponent],
  imports: [
    CommonModule,
    UpdateCreditorRoutingModule,
    SharedModule
  ]
})
export class UpdateCreditorModule { }