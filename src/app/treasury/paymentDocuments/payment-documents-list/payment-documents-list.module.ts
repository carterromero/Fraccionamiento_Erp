import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDocumentsListRoutingModule } from './payment-documents-list-routing.module';
import { PaymentDocumentsListComponent } from './payment-documents-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [PaymentDocumentsListComponent],
  imports: [
    CommonModule,
    PaymentDocumentsListRoutingModule,
    SharedModule
  ]
})
export class PaymentDocumentsListModule { 



}