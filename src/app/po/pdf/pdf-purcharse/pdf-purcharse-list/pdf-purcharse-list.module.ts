import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';


import { Purcharse } from 'src/app/purcharse';
import { PdfPurcharseListRoutingModule } from './pdf-purcharse-list-routing.module';
import { PdfPurcharseListComponent } from './pdf-purcharse-list.component';


@NgModule({
  declarations: [ PdfPurcharseListComponent],


  imports: [
    CommonModule,
    PdfPurcharseListRoutingModule,
 
 
    
    SharedModule
  ]
})
export class PdfPurcharseListModule { }