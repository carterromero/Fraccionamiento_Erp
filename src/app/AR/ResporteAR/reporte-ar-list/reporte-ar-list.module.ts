import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteARListRoutingModule } from './reporte-ar-list-routing.module';
import { ReporteARListComponent } from './resporte-ar-list.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ReporteARListComponent],
  imports: [
    CommonModule,
    ReporteARListRoutingModule,
    SharedModule
  ]
})
export class ReporteARListModule { }