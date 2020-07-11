import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcReportsInternalRoutingModule } from './ac-reports-internal-routing.module';
import { AcReportsInternalComponent } from './ac-reports-internal.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ AcReportsInternalComponent ],
  imports: [
    CommonModule,
    AcReportsInternalRoutingModule,
    SharedModule
  ]
})
export class AcReportsInternalModule { }
