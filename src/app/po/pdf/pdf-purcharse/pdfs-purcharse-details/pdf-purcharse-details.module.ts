import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfPurcharseDetailsComponent } from './pdf-purcharse-details.component';
import { PdfPurcharseDetailsRoutingModule } from './pdf-purcharse-details-routing.module ';
import { SharedModule } from 'src/app/theme/shared/shared.module';




@NgModule({
  declarations: [  PdfPurcharseDetailsComponent],
  imports: [
    CommonModule,
 PdfPurcharseDetailsRoutingModule,
    
  

    SharedModule
  ]
})
export class PdfPurcharseDetailsModule { 



}