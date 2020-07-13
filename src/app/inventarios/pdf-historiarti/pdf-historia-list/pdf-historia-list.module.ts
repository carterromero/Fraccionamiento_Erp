import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from 'src/app/theme/shared/shared.module';

import { PdfHistoriaListRoutingModule } from './pdf-historia-list-routing.module';
import { PdfHistoriaListComponent } from './pdf-historia-list.component';

@NgModule({
  declarations: [PdfHistoriaListComponent],
  imports: [
    CommonModule,
    PdfHistoriaListRoutingModule,
    SharedModule
  ]
})
export class PdfHistoriaListModule { }