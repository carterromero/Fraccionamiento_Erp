import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcReportsVisitorRoutingModule } from './ac-reports-visitor-routing.module';
import { AcReportsVisitorComponent } from './ac-reports-visitor.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ AcReportsVisitorComponent ],
  imports: [
    CommonModule,
    AcReportsVisitorRoutingModule,
    SharedModule
  ]
})
export class AcReportsVisitorModule { }
