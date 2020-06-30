import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../../theme/shared/shared.module';
import { PdfSupplierListComponent } from './pdf-supplier-list.component';
import { SupplierPdfRoutingModule } from './pdf-supplier-list-routing.module';

@NgModule({
  declarations: [PdfSupplierListComponent],
  imports: [
    CommonModule,
    SupplierPdfRoutingModule,
  
    SharedModule
  ]
})
export class SupplierPdftModule { 



}