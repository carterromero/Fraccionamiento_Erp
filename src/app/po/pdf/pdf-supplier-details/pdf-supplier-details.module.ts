import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { PdfSupplierDetailsComponent } from './pdf-supplier-details.component';
import { PdfSupplierDetailsRoutingModule } from './pdf-supplier-details-routing.module';





@NgModule({
  declarations: [PdfSupplierDetailsComponent],
  imports: [
    CommonModule,
    PdfSupplierDetailsRoutingModule,
    SharedModule
  ]
})
export class PdfSupplierDetailsModule { 



}