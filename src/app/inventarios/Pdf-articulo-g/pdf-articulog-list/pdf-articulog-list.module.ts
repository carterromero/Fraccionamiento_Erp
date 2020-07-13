import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from 'src/app/theme/shared/shared.module';
import { PdfArticulogListRoutingModule } from './pdf-articulog-list-routing.module';
import { PdfArticulogListComponent } from './pdf-articulog-list.component';

@NgModule({
  declarations: [PdfArticulogListComponent],
  imports: [
    CommonModule,
    PdfArticulogListRoutingModule,
    SharedModule
  ]
})
export class PdfArticulogListModule { }